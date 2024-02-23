import math
import os
import re
from datetime import datetime

import marisa_trie
import pandas as pd
import pytz

# build_path = '../tmp'
build_path = "build"
# pipreqs . --encoding=utf8 --force
编码计数字典 = {}


def 添加已用编码(编码):
	编码 = 编码.lower()
	编码计数字典[编码] = (编码计数字典[编码][0] + 1,) if (编码 in 编码计数字典) else (1,)


print("1. 获取字根词典")
字根词典 = {}
for 字根项 in open("data/字根码表.csv", "r", encoding="utf8"):
	字根项 = re.match(r"(.)\t([A-Za-z]+)\t([A-Za-z]*)\t.*\n", 字根项)
	if 字根项:
		字根词典[字根项.group(1)] = {"code": 字根项.group(2), "扩展特设码": 字根项.group(3)}
print(f"共获取{len(字根词典)}个字根\n")

print("2. 获取单字拆分与词频")
单字词典 = pd.read_csv("data/单字表.csv", sep="\t", encoding="utf8")
单字词典 = 单字词典.set_index("单字", drop=False)
print(单字词典.head(5))
print(单字词典.shape)
print()

print("3. 获取特设码")
短特设码词典 = {}
长特设码词典 = {}
for 特设码项 in open("data/特设码.csv", "r", encoding="utf8"):
	特设码项 = re.match(r"(.*)\t([A-Za-z]+)\t(.*)\n", 特设码项)
	if 特设码项:
		if len(特设码项.group(2)) == 1:
			短特设码词典[特设码项.group(1)] = 特设码项.group(2)
		else:
			长特设码词典[特设码项.group(1)] = 特设码项.group(2)
print(f"共获取{len(短特设码词典)}个短特设码，{len(长特设码词典)}个长特设码\n")


print("4. 生成全息码、常用码")
单字词典.insert(单字词典.shape[1], "全息码", None)  # 增加一列全息码
单字词典.insert(单字词典.shape[1], "常用码", None)  # 增加一列常用码
单字词典.insert(单字词典.shape[1], "全主码", None)  # 增加一列全主码
已使用的全息码集 = set(())
已使用的常用码集 = set(())
for i in range(len(单字词典)):
	单字 = 单字词典.iat[i, 0]
	拆分 = 单字词典.iat[i, 1]
	if i % 5000 == 0:
		print(f"{i} {单字} {拆分}")
	字根数 = len(拆分)
	全息码 = ""
	全主码 = ""
	if 字根数 == 1:  # 单字根字
		字根 = 字根词典[拆分]
		全息码 = 字根["code"]  # 字根码
		全主码 = 全息码[0]
	else:  # 多字根字
		for 字根 in 拆分:
			全息码 += 字根词典[字根]["code"][:2]  # 全息码：依次取每个字根的主码和该字根第一个小码
			全主码 += 字根词典[字根]["code"][0]
	已使用的全息码集.add(全息码.lower())
	单字词典.loc[单字, "全息码"] = 全息码
	单字词典.loc[单字, "全主码"] = 全主码
	常用码 = ""
	if 字根数 > 1:
		for 字根 in 拆分:
			常用码 += 字根词典[字根]["code"][0]  # 常用码：依次取每个字根的主码
		if 字根数 < 5:
			常用码 += 字根词典[拆分[-1]]["code"][1:2]  # 再取尾字根小码
			常用码 += 字根词典[拆分[0]]["code"][1:2]  # 再取首字根小码
		elif 字根数 == 5:
			末尾小码 = 字根词典[拆分[-1]]["code"][1:2]
			if 末尾小码 != "":
				常用码 += 末尾小码
			else:
				常用码 += 字根词典[拆分[0]]["code"][1:2]  # 再取首字根小码
		elif 字根数 > 5:
			常用码 += 字根词典[拆分[-1]]["code"][1:2]  # 再取尾字根小码
		已使用的常用码集.add(常用码.lower())
		添加已用编码(常用码)
	单字词典.loc[单字, "常用码"] = 常用码
print(单字词典.head(5))
print()
print("5. 生成特设码")
单字词典.insert(单字词典.shape[1], "短特设码", None)  # 增加一列1码长特设码
单字词典.insert(单字词典.shape[1], "长特设码", None)  # 增加一列其余特设码
已使用的快速码集 = set(())
# 字根扩展特设码，这部分字不再生成快速码，但是字根扩展特设码参与查重
有扩展特设码的字根 = set(())
for 字根, item in 字根词典.items():
	扩展特设码 = item["扩展特设码"]
	if 扩展特设码 is not None and 扩展特设码 != "":
		单字词典.loc[字根, "长特设码"] = 扩展特设码
		已使用的快速码集.add(扩展特设码.lower())
		添加已用编码(扩展特设码)
		有扩展特设码的字根.add(字根)
# 1码长特设码,同时也参与快速码生成和查重
for 单字, 短特设码 in 短特设码词典.items():
	单字词典.loc[[单字], ["短特设码"]] = 短特设码
	已使用的快速码集.add((短特设码.lower()))
	添加已用编码(短特设码)
单字词典.loc[单字词典.短特设码.isna(), "短特设码"] = ""
# 其余码长特设码，这部分字不再生成快速码，但是参与查重
有长特设码的单字 = set(())
for 单字, 长特设码 in 长特设码词典.items():
	单字词典.loc[单字, "长特设码"] = 长特设码
	已使用的快速码集.add((长特设码.lower()))
	添加已用编码(长特设码)
	有长特设码的单字.add(单字)
单字词典.loc[单字词典.长特设码.isna(), "长特设码"] = ""
print(单字词典.head(5))
print()

print("6. 生成快速码")
单字词典 = 单字词典.rename(columns={"单字": "word"})
单字词典.sort_values(by=["编码权重", "word"], ascending=[False, True], inplace=True)
单字词典.insert(单字词典.shape[1], "快速码", None)  # 增加一列快速码

for i in range(len(单字词典)):
	# 生僻字，已经有扩展码的单字根字，已经有长特设码的多字根字不参与快速码编码
	单字 = 单字词典.iat[i, 0]
	编码权重 = 单字词典.iat[i, 2]
	if i % 5000 == 0:
		print(f"{i} {单字}")
	if 编码权重 < -999 or 单字 in 有扩展特设码的字根 or 单字 in 有长特设码的单字:
		continue
	拆分 = 单字词典.iat[i, 1]
	全主码 = 单字词典.iat[i, 6]
	常用码 = 单字词典.iat[i, 5]
	全息码 = 单字词典.iat[i, 4]
	字根数 = len(全主码)
	快速码 = 常用码[:2]
	剩余常用码 = 常用码[2:]
	快速码生成成功 = False
	while len(剩余常用码) > 0:
		if 快速码.lower() not in 已使用的快速码集:
			已使用的快速码集.add(快速码.lower())
			添加已用编码(快速码)
			单字词典.loc[单字, "快速码"] = 快速码
			快速码生成成功 = True
			break
		快速码 += 剩余常用码[0]
		剩余常用码 = 剩余常用码[1:]
print(单字词典.head(5))
print()


print("6+. 获取单字兼容拆分")
兼容拆分 = pd.read_csv("data/兼容拆分表.csv", sep="\t", encoding="utf8")
兼容拆分 = 兼容拆分.set_index("单字", drop=False)
print(兼容拆分.head(5))
print(兼容拆分.shape)
print()
print("6++. 生成兼容拆分码")
兼容拆分.insert(兼容拆分.shape[1], "全息码", None)  # 增加一列全息码
兼容拆分.insert(兼容拆分.shape[1], "全主码", None)  # 增加一列全主码
兼容拆分.insert(兼容拆分.shape[1], "兼容码", None)  # 增加一列兼容码
for i in range(len(兼容拆分)):
	单字 = 兼容拆分.iat[i, 0]
	拆分 = 兼容拆分.iat[i, 1]
	if i % 5000 == 0:
		print(f"{i} {单字} {拆分}")
	字根数 = len(拆分)
	全息码 = ""
	全主码 = ""
	if 字根数 == 1:  # 单字根字
		字根 = 字根词典[拆分]
		全息码 = 字根["code"]  # 字根码
		全主码 = 全息码[0]
	else:  # 多字根字
		for 字根 in 拆分:
			全息码 += 字根词典[字根]["code"][:2]  # 全息码：依次取每个字根的主码和该字根第一个小码
			全主码 += 字根词典[字根]["code"][0]
	兼容拆分.loc[单字, "全息码"] = 全息码
	兼容拆分.loc[单字, "全主码"] = 全主码
	兼容码 = ""
	if 字根数 > 1:
		for 字根 in 拆分:
			兼容码 += 字根词典[字根]["code"][0]  # 常用码：依次取每个字根的主码
		if 字根数 < 5:
			兼容码 += 字根词典[拆分[-1]]["code"][1:2]  # 再取尾字根小码
			兼容码 += 字根词典[拆分[0]]["code"][1:2]  # 再取首字根小码
		elif 字根数 == 5:
			末尾小码 = 字根词典[拆分[-1]]["code"][1:2]
			if 末尾小码 != "":
				兼容码 += 末尾小码
			else:
				兼容码 += 字根词典[拆分[0]]["code"][1:2]  # 再取首字根小码
		elif 字根数 > 5:
			兼容码 += 字根词典[拆分[-1]]["code"][1:2]  # 再取尾字根小码
	兼容拆分.loc[单字, "兼容码"] = 兼容码
	添加已用编码(兼容码)
print(兼容拆分.head(5))
print()

print("6++++.记录无重码位置")
单字词典.insert(单字词典.shape[1], "常用码无重位", None)  # 增加一列常用码无重位
已用编码字典树 = marisa_trie.RecordTrie("<H", zip(编码计数字典.keys(), 编码计数字典.values()))
for i in range(len(单字词典)):
	if i % 5000 == 0:
		print(f"{i} {单字}")
	单字 = 单字词典.iat[i, 0]
	常用码 = 单字词典.iat[i, 5]
	# 单字  = "囊"
	# 常用码 = "HOSAOOCHYi"
	常用码无重位 = -1
	for i in range(len(常用码), 0, -1):
		有重码 = False
		if i == len(常用码):
			查询结果 = 已用编码字典树.get(常用码.lower(), None)
			if 查询结果 and 查询结果[0][0] > 1:
				break
		if len(已用编码字典树.keys(常用码[0:i].lower())) > 1:
			有重码 = True
			break
		else:
			常用码无重位 = i
	单字词典.loc[单字, "常用码无重位"] = 常用码无重位
print(单字词典.head(5))
print()
print("7.打印单字码表")
单字词典.to_csv(f"./{build_path}/单字词典.csv", encoding="utf8", index=None, sep="\t", lineterminator="\n")
tmp = []
for i in range(len(单字词典)):
	单字 = 单字词典.iat[i, 0]
	词库权重 = math.ceil(单字词典.iat[i, 3])
	拆分 = 单字词典.iat[i, 1]
	全主码 = 单字词典.iat[i, 6]
	常用码 = 单字词典.iat[i, 5]
	全息码 = 单字词典.iat[i, 4]
	快速码 = 单字词典.iat[i, 9]
	短特设码 = 单字词典.iat[i, 7]
	长特设码 = 单字词典.iat[i, 8]

	if 长特设码 is not None and 长特设码 != "":
		tmp.append([单字, 长特设码, 0, 词库权重])
	if 短特设码 is not None and 短特设码 != "":
		tmp.append([单字, 短特设码, 1, 词库权重])
	if 快速码 is not None and 快速码 != "" and 快速码 != 短特设码:
		tmp.append([单字, 快速码, 2, 词库权重])
	if 常用码 is not None and 常用码 != "" and 常用码 != 短特设码 and 常用码 != 快速码:
		tmp.append([单字, 常用码, 3, 词库权重])
	if len(拆分) == 1 and 全息码 is not None and 全息码 != "" and 全息码 != 短特设码 and 全息码 != 快速码 and 全息码 != 常用码:
		tmp.append([单字, 全息码, 4, 词库权重])

兼容拆分.to_csv(f"./{build_path}/兼容拆分.csv", encoding="utf8", index=None, sep="\t", lineterminator="\n")
for i in range(len(兼容拆分)):
	单字 = 兼容拆分.iat[i, 0]
	词库权重 = math.ceil(兼容拆分.iat[i, 3])
	拆分 = 兼容拆分.iat[i, 1]
	兼容码 = 兼容拆分.iat[i, 6]
	tmp.append([单字, 兼容码, 5, 词库权重])

码表 = pd.DataFrame(columns=["单字", "编码", "编码类别", "词库权重"], data=tmp)
码表["统一小写编码"] = 码表["编码"].str.lower()
码表.sort_values(by=["统一小写编码", "词库权重", "编码类别", "单字"], ascending=[True, False, True, True], inplace=True)
单字码表路径 = f"./{build_path}/ShanRenMaLTS.words.dict.yaml"
旧码表内容 = None  # 不包含文件头
旧码表全文 = None
with open(单字码表路径, "r", encoding="utf8") as f:
	旧码表全文 = f.read()
	旧码表内容 = 旧码表全文[旧码表全文.find("\n...\n") + 5 :]
码表.to_csv(单字码表路径, encoding="utf8", index=None, header=False, sep="\t", columns=["单字", "统一小写编码", "词库权重"], lineterminator="\n")

UTC8 = pytz.timezone("Asia/Shanghai")
timenow = datetime.now(UTC8)
timenow = timenow.strftime("%Y-%m-%d %H:%M:%S")

新码表内容 = None
with open(单字码表路径, "r", encoding="utf8") as f:
	新码表内容 = f.read()
if 旧码表内容 == 新码表内容:
	print(f"{单字码表路径} 新旧码表内容相同，不需要更新")
	with open(单字码表路径, "w", encoding="utf8") as f:
		f.write(旧码表全文)
else:
	码表文件头 = f'# 山人码LTS单字码表\n# encoding: utf-8\n---\nname: ShanRenMaLTS.words\nversion: "{timenow}"\nsort: by_weight\nuse_preset_vocabulary: false\ncolumns:\n  - text #字词\n  - code #编码\n  - weight #权重\n...\n'
	with open(单字码表路径, "w", encoding="utf8") as f:
		f.write(码表文件头)
		f.write(新码表内容)


print("8. 生成词组码表")
table码表构词码词典 = {}
script码表构词码词典 = {}
for i in range(len(单字词典)):
	单字 = 单字词典.iat[i, 0]
	词库权重 = math.ceil(单字词典.iat[i, 3])
	拆分 = 单字词典.iat[i, 1]
	全主码 = 单字词典.iat[i, 6]
	常用码 = 单字词典.iat[i, 5]
	全息码 = 单字词典.iat[i, 4]
	快速码 = 单字词典.iat[i, 9]
	短特设码 = 单字词典.iat[i, 7]
	长特设码 = 单字词典.iat[i, 8]
	script码表构词码 = []
	if re.match(f"^{长特设码.lower()}", 常用码.lower()) is None:
		script码表构词码.append(长特设码)  # 如果特设码
	if 常用码 != "" and 常用码 is not None:
		script码表构词码.append(常用码)
	elif re.match(f"^{全息码.lower()}", 长特设码.lower()) is None:
		script码表构词码.append(全息码)
	script码表构词码词典[单字] = script码表构词码
script码表构词码词典["Q"] = ["Q"]
script码表构词码词典["W"] = ["W"]
script码表构词码词典["E"] = ["E"]
script码表构词码词典["R"] = ["R"]
script码表构词码词典["T"] = ["T"]
script码表构词码词典["Y"] = ["Y"]
script码表构词码词典["U"] = ["U"]
script码表构词码词典["I"] = ["I"]
script码表构词码词典["O"] = ["O"]
script码表构词码词典["P"] = ["P"]
script码表构词码词典["A"] = ["A"]
script码表构词码词典["S"] = ["S"]
script码表构词码词典["D"] = ["D"]
script码表构词码词典["F"] = ["F"]
script码表构词码词典["G"] = ["G"]
script码表构词码词典["H"] = ["H"]
script码表构词码词典["J"] = ["J"]
script码表构词码词典["K"] = ["K"]
script码表构词码词典["L"] = ["L"]
script码表构词码词典["Z"] = ["Z"]
script码表构词码词典["X"] = ["X"]
script码表构词码词典["C"] = ["C"]
script码表构词码词典["V"] = ["V"]
script码表构词码词典["B"] = ["B"]
script码表构词码词典["N"] = ["N"]
script码表构词码词典["M"] = ["M"]
script码表构词码词典["Q"] = ["Q"]
script码表构词码词典["W"] = ["W"]
script码表构词码词典["E"] = ["E"]
script码表构词码词典["R"] = ["R"]
script码表构词码词典["T"] = ["T"]
script码表构词码词典["Y"] = ["Y"]
script码表构词码词典["U"] = ["U"]
script码表构词码词典["I"] = ["I"]
script码表构词码词典["O"] = ["O"]
script码表构词码词典["P"] = ["P"]
script码表构词码词典["A"] = ["A"]
script码表构词码词典["S"] = ["S"]
script码表构词码词典["D"] = ["D"]
script码表构词码词典["F"] = ["F"]
script码表构词码词典["G"] = ["G"]
script码表构词码词典["H"] = ["H"]
script码表构词码词典["J"] = ["J"]
script码表构词码词典["K"] = ["K"]
script码表构词码词典["L"] = ["L"]
script码表构词码词典["Z"] = ["Z"]
script码表构词码词典["X"] = ["X"]
script码表构词码词典["C"] = ["C"]
script码表构词码词典["V"] = ["V"]
script码表构词码词典["B"] = ["B"]
script码表构词码词典["N"] = ["N"]
script码表构词码词典["M"] = ["M"]
script码表构词码词典["Q"] = ["Q"]
script码表构词码词典["W"] = ["W"]
script码表构词码词典["E"] = ["E"]
script码表构词码词典["R"] = ["R"]
script码表构词码词典["T"] = ["T"]
script码表构词码词典["Y"] = ["Y"]
script码表构词码词典["U"] = ["U"]
script码表构词码词典["I"] = ["I"]
script码表构词码词典["O"] = ["O"]
script码表构词码词典["P"] = ["P"]
script码表构词码词典["A"] = ["A"]
script码表构词码词典["S"] = ["S"]
script码表构词码词典["D"] = ["D"]
script码表构词码词典["F"] = ["F"]
script码表构词码词典["G"] = ["G"]
script码表构词码词典["H"] = ["H"]
script码表构词码词典["J"] = ["J"]
script码表构词码词典["K"] = ["K"]
script码表构词码词典["L"] = ["L"]
script码表构词码词典["Z"] = ["Z"]
script码表构词码词典["X"] = ["X"]
script码表构词码词典["C"] = ["C"]
script码表构词码词典["V"] = ["V"]
script码表构词码词典["B"] = ["B"]
script码表构词码词典["N"] = ["N"]
script码表构词码词典["M"] = ["M"]
script码表构词码词典["q"] = ["Q"]
script码表构词码词典["w"] = ["W"]
script码表构词码词典["e"] = ["E"]
script码表构词码词典["r"] = ["R"]
script码表构词码词典["t"] = ["T"]
script码表构词码词典["y"] = ["Y"]
script码表构词码词典["u"] = ["U"]
script码表构词码词典["i"] = ["I"]
script码表构词码词典["o"] = ["O"]
script码表构词码词典["p"] = ["P"]
script码表构词码词典["a"] = ["A"]
script码表构词码词典["s"] = ["S"]
script码表构词码词典["d"] = ["D"]
script码表构词码词典["f"] = ["F"]
script码表构词码词典["g"] = ["G"]
script码表构词码词典["h"] = ["H"]
script码表构词码词典["j"] = ["J"]
script码表构词码词典["k"] = ["K"]
script码表构词码词典["l"] = ["L"]
script码表构词码词典["z"] = ["Z"]
script码表构词码词典["x"] = ["X"]
script码表构词码词典["c"] = ["C"]
script码表构词码词典["v"] = ["V"]
script码表构词码词典["b"] = ["B"]
script码表构词码词典["n"] = ["N"]
script码表构词码词典["m"] = ["M"]
script码表构词码词典["＋"] = ["V"]
script码表构词码词典["+"] = ["V"]
script码表构词码词典["/"] = ["V"]
script码表构词码词典["-"] = ["V"]
script码表构词码词典["."] = ["V"]
script码表构词码词典["0"] = ["V"]
script码表构词码词典["1"] = ["V"]
script码表构词码词典["2"] = ["V"]
script码表构词码词典["3"] = ["V"]
script码表构词码词典["4"] = ["V"]
script码表构词码词典["5"] = ["V"]
script码表构词码词典["6"] = ["V"]
script码表构词码词典["7"] = ["V"]
script码表构词码词典["8"] = ["V"]
script码表构词码词典["9"] = ["V"]
script码表构词码词典["#"] = ["V"]
script码表构词码词典["－"] = ["V"]
script码表构词码词典[":"] = ["V"]
script码表构词码词典[" "] = ["V"]
script码表构词码词典["　"] = ["V"]
script码表构词码词典["_"] = ["V"]
script码表构词码词典['"'] = ["V"]
script码表构词码词典["—"] = ["V"]
script码表构词码词典["ノ"] = ["PI"]


def 生成编码(构词码词典, 待处理词组, 已生成编码表, 编码分隔符=""):
	if 待处理词组 == "":
		return 已生成编码表
	单字构词码列表 = ""
	if 待处理词组[:1] in 构词码词典:
		单字构词码列表 = 构词码词典[待处理词组[:1]]
	新增编码表 = []
	for 单字构词码列表 in 单字构词码列表:
		for 编码前缀 in 已生成编码表:
			新增编码表.append(编码前缀 + 单字构词码列表 + 编码分隔符)
	return 生成编码(构词码词典, 待处理词组[1:], 新增编码表, 编码分隔符)


def 生成词库编码(词库文件, 码表文件, 写入方式):
	新码表内容 = ""
	cnt = 0
	print(f"读取 {词库文件}")
	for 词组项 in open(词库文件, "r", encoding="utf8"):
		词组项 = re.match(r"(.+)\t(.*)\n", 词组项)
		if 词组项 is None:
			continue
		词组 = 词组项.group(1)
		词组权重 = 词组项.group(2)
		if 词组权重 is None or 词组权重 == "":
			词组权重 = 9100000
		else:
			词组权重 = math.ceil(float(词组权重))
		if cnt % 50000 == 0:
			print(cnt, 词组)
		cnt += 1
		词组编码列表 = 生成编码(script码表构词码词典, 词组, [""], " ")
		if len(词组) > 5 and 词组[-1]:
			长词缩略编码列表 = 生成编码(script码表构词码词典, 词组[:4], [""], " ")
			if 词组[-1] in script码表构词码词典:
				for 长词缩略编码 in 长词缩略编码列表:
					for 尾字构词码 in script码表构词码词典[词组[-1]]:
						词组编码列表.append(长词缩略编码 + 尾字构词码)
		for 词组编码 in 词组编码列表:
			if len(词组编码) == 0:
				print(f"ERROR {词组} 生成了空编码")
				continue
			if 词组编码[-1] == " ":
				词组编码 = 词组编码[:-1]
			新码表内容 += f"{词组}\t{词组编码.lower()}\t{词组权重}\n"
	return 新码表内容


def 生成并写入(词库路径, 码表路径, 码表名):
	print(f"将 {词库路径} 生成为 {码表路径}")
	旧码表内容 = None  # 不包含文件头
	新码表内容 = 生成词库编码(词库路径, 码表路径, "w+")
	if os.path.isfile(码表路径):
		with open(码表路径, "r", encoding="utf8") as f:
			旧码表内容 = f.read()
			旧码表内容 = 旧码表内容[旧码表内容.find("\n...\n") + 5 :]
		if 旧码表内容 == 新码表内容:
			print(f"{码表名} 新旧码表内容相同，不需要更新")
			return
	timenow = datetime.now(UTC8)
	timenow = timenow.strftime("%Y-%m-%d %H:%M:%S")
	码表文件头 = f'# 山人码LTS词库码表\n# encoding: utf-8\n---\nname: {码表名}\nversion: "{timenow}"\nsort: by_weight\nuse_preset_vocabulary: false\ncolumns:\n  - text #字词\n  - code #编码\n  - weight #权重\n...\n'
	with open(码表路径, "w", encoding="utf8") as f:
		f.write(码表文件头)
		f.write(新码表内容)
	print(f"{码表名} 已写入到 {码表路径}")


生成并写入("./data/反查词库.csv", f"./{build_path}/ShanRenMaLTS.reverse.dict.yaml", "ShanRenMaLTS.reverse")
生成并写入("./data/核心词库.csv", f"./{build_path}/ShanRenMaLTS.phrases_CORE.dict.yaml", "ShanRenMaLTS.phrases_CORE")
生成并写入("./data/扩展词库0.csv", f"./{build_path}/ShanRenMaLTS.phrases_EXT01.dict.yaml", "ShanRenMaLTS.phrases_EXT01")
生成并写入("./data/扩展词库1.csv", f"./{build_path}/ShanRenMaLTS.phrases_EXT02.dict.yaml", "ShanRenMaLTS.phrases_EXT02")
生成并写入("./data/扩展词库2.csv", f"./{build_path}/ShanRenMaLTS.phrases_EXT03.dict.yaml", "ShanRenMaLTS.phrases_EXT03")
生成并写入("./data/扩展词库3.csv", f"./{build_path}/ShanRenMaLTS.phrases_EXT04.dict.yaml", "ShanRenMaLTS.phrases_EXT04")
生成并写入("./data/扩展词库4.csv", f"./{build_path}/ShanRenMaLTS.phrases_EXT05.dict.yaml", "ShanRenMaLTS.phrases_EXT05")
生成并写入("./data/扩展词库5.csv", f"./{build_path}/ShanRenMaLTS.phrases_EXT06.dict.yaml", "ShanRenMaLTS.phrases_EXT06")
