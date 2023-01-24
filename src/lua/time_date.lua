--代码来自https://gitee.com/leeonchiu/lunarDate-script-for-Rime/

-- 方法1添加于***.custom.yaml
-- patch:
--   "engine/translators/@before 0": lua_translator@Jq_translator
--   "engine/translators/@before 1": lua_translator@lunar_translator
--   "engine/translators/@before 2": lua_translator@QueryLunar_translator
--   "engine/translators/@before 3": lua_translator@number_translator
-- 或者直接
--   "engine/translators/@before 0": lua_translator@time_date

-- 方法2添加于***.schema.yaml
--   translators:
--     - "lua_translator@Jq_translator"
--     - "lua_translator@lunar_translator"
--     - "lua_translator@QueryLunar_translator"
--     - "lua_translator@number_translator"
-- 或者直接
--     - "lua_translator@time_date"

-- 输出方法：默认编码week、date、time、nl、jq
-- 农历查询以任意大写字母引导：如D2021010112
-- ==========================================================================
-- select_character.lua以词定字添加方法，
-- 方法1添加于***.custom.yaml
-- patch:
--   "engine/processors/@before 0": lua_processor@select_character
-- 或者

-- 方法2添加于***.schema.yaml
--   processors:
--     - "lua_processor@select_character"

-- 修改首字上屏与末字上屏快捷键方法
-- 添加于***.custom.yaml内
-- patch:
--   key_binder/select_first_character: 'comma'
--   key_binder/select_last_character: 'period'

-- 输出方法默认以 [ 上屏指定候选项的首字，] 上屏指定候选项的末字
-- ==========================================================================


rv_var={ week_var="week",date_var="date",nl_var="nong",time_var="time",jq_var="jieq"}	-- 编码关键字修改
require("lunarDate")
require("lunarJq")
require("lunarGz")

function CnDate_translator(y)
	 local t,cstr,t2,t1
	 cstr = {"〇","一","二","三","四","五","六","七","八","九"}  t=""  t1=tostring(y)
	if t1.len(tostring(t1))~=8 then return t1 end
	 for i =1,t1.len(t1) do
		  t2=cstr[tonumber(t1.sub(t1,i,i))+1]
		  if i==5 and t2 ~= "〇" then t2="年十" elseif i==5 and t2 == "〇" then t2="年"  end
		  if i==6 and t2 ~= "〇" then t2 =t2 .. "月" elseif i==6 and t2 == "〇" then t2="月"  end
		  --if t.sub(t,t.len(t)-1)=="年" then t2=t2 .. "月" end
		  if i==7 and tonumber(t1.sub(t1,7,7))>1 then t2= t2 .. "十" elseif i==7 and t2 == "〇" then t2="" elseif i==7 and tonumber(t1.sub(t1,7,7))==1 then t2="十" end
		  if i==8 and t2 ~= "〇" then t2 =t2 .. "日" elseif i==8 and t2 == "〇" then t2="日"  end
		  t=t .. t2
	end
		  return t
end

local GetLunarSichen= function(time,t)
	local time=tonumber(time)
	local LunarSichen = {"子时(夜半｜三更)", "丑时(鸡鸣｜四更)", "寅时(平旦｜五更)", "卯时(日出)", "辰时(食时)", "巳时(隅中)", "午时(日中)", "未时(日昳)", "申时(哺时)", "酉时(日入)", "戌时(黄昏｜一更)", "亥时(人定｜二更)"}
	if tonumber(t)==1 then sj=math.floor((time+1)/2)+1 elseif tonumber(t)==0 then sj=math.floor((time+13)/2)+1 end
	if sj>12 then return LunarSichen[sj-12] else return LunarSichen[sj] end
end

-- 年天数判断
local function IsLeap(y)
	local year=tonumber(y)
	if math.fmod(year,400)~=0 and math.fmod(year,4)==0 or math.fmod(year,400)==0 then return 366
	else return 365 end
end

local format_Time= function()
	if os.date("%p")=="AM" then return "上午" else return "下午" end
end

local format_week= function(n)
	local obj={"日","一","二","三","四","五","六"}
	if tonumber(n)==1 then return "周"..obj[os.date("%w")+1] else return "星期"..obj[os.date("%w")+1] end
end
-------------------------------------------------------------
--[[
	--%a 星期简称，如Wed	%A 星期全称，如Wednesday
	--%b 月份简称，如Sep	%B 月份全称，如September
	--%c 日期时间格式 (e.g., 09/16/98 23:48:10)
	--%d 一个月的第几天 [01-31]	%j 一年的第几天
	--%H 24小时制 [00-23]	%I 12小时制 [01-12]
	--%M 分钟 [00-59]	%m 月份 (09) [01-12]
	--%p 上午/下午 (pm or am)
	--%S 秒 (10) [00-61]
	--%w 星期的第几天 [0-6 = Sunday-Saturday]	%W 一年的第几周
	--%x 日期格式 (e.g., 09/16/98)	%X 时间格式 (e.g., 23:48:10)
	--%Y 年份全称 (1998)	%y 年份简称 [00-99]
	--%% 百分号
	--os.date() 把时间戳转化成可显示的时间字符串
	--os.time ([table])
--]]
----------------------------------------------------------------

-- 公历日期
function date_translator(input, seg)
	local keyword = rv_var["date_var"]	--更多格式添加于dates之中
	if (input == keyword) then
		 local dates = {
			os.date("%Y-%m-%d 第%W周")
			,os.date("%Y年%m月%d日")
			,CnDate_translator(os.date("%Y%m%d"))
			,os.date("%Y-%m-%d｜%j/" .. IsLeap(os.date("%Y")))
			}
		-- Candidate(type, start, end, text, comment)
		for i =1,#dates do
			local cand = Candidate(keyword, seg.start, seg._end, dates[i], "〔日期〕")
			cand.quality = 1000
			yield(cand)
		end
		dates = nil
	end
end

-- 公历时间
function time_translator(input, seg)
	local keyword = rv_var["time_var"]	--更多格式添加于times之中
	if (input == keyword) then
		local times = {
			os.date("%H:%M:%S")
			,os.date("%Y-%m-%d " .. format_Time() .. "%I:%M")
			}
		for i =1,#times do
			local cand = Candidate(keyword, seg.start, seg._end, times[i], "〔时间〕")
			cand.quality = 1000
			yield(cand)
		end
		times = nil
	end
end

-- 农历日期
function lunar_translator(input, seg)
	local keyword = rv_var["nl_var"]	--更多格式添加于lunar之中
	if (input == keyword) then
		local lunar = {
				{Date2LunarDate(os.date("%Y%m%d")) .. JQtest(os.date("%Y%m%d")),"〔公历⇉农历〕"}
				,{Date2LunarDate(os.date("%Y%m%d")) .. GetLunarSichen(os.date("%H"),1),"〔公历⇉农历〕"}
				,{lunarJzl(os.date("%Y%m%d%H")),"〔公历⇉干支〕"}
				,{LunarDate2Date(os.date("%Y%m%d"),0),"〔农历⇉公历〕"}
			}
		local leapDate={LunarDate2Date(os.date("%Y%m%d"),1).."（闰）","〔农历⇉公历〕"}
		if string.match(leapDate[1],"^(%d+)")~=nil then table.insert(lunar,leapDate) end
		for i =1,#lunar do
			local cand = Candidate(keyword, seg.start, seg._end, lunar[i][1], lunar[i][2])
			cand.quality = 1000
			yield(cand)
		end
		lunar = nil
	end
end

local function QueryLunarInfo(date)
	local str,LunarDate,LunarGz,result,DateTime
	date=tostring(date) result={}
	str = date:gsub("^(%u+)","")
	if string.match(str,"^(20)%d%d+$")~=nil or string.match(str,"^(19)%d%d+$")~=nil then
		if string.len(str)==4 then str=str..string.sub(os.date("%m%d%H"),1) elseif string.len(str)==5 then str=str..string.sub(os.date("%m%d%H"),2) elseif string.len(str)==6 then str=str..string.sub(os.date("%m%d%H"),3) elseif string.len(str)==7 then str=str..string.sub(os.date("%m%d%H"),4)
		elseif string.len(str)==8 then str=str..string.sub(os.date("%m%d%H"),5) elseif string.len(str)==9 then str=str..string.sub(os.date("%m%d%H"),6) else str=string.sub(str,1,10) end
		if tonumber(string.sub(str,5,6))>12 or tonumber(string.sub(str,5,6))<1 or tonumber(string.sub(str,7,8))>31 or tonumber(string.sub(str,7,8))<1 or tonumber(string.sub(str,9,10))>24 then return result end
		LunarDate=Date2LunarDate(str)  LunarGz=lunarJzl(str)  DateTime=LunarDate2Date(str,0)
		if LunarGz~=nil then
			result={
				{CnDate_translator(string.sub(str,1,8)),"〔中文日期〕"}
				,{LunarDate,"〔公历⇉农历〕"}
				,{LunarGz,"〔公历⇉干支〕"}
			}
			if tonumber(string.sub(str,7,8))<31 then
				table.insert(result,{DateTime,"〔农历⇉公历〕"})
				local leapDate={LunarDate2Date(str,1).."（闰）","〔农历⇉公历〕"}
				if string.match(leapDate[1],"^(%d+)")~=nil then table.insert(result,leapDate) end
			end
		end
	end

	return result
end

-- 农历查询
function QueryLunar_translator(input, seg)	--以任意大写字母开头引导反查农历日期，日期位数不足会以当前日期补全。
	local str,lunar
	if string.match(input,"^(%u+%d+)$")~=nil then
		str = input:gsub("^(%a+)", "")
		if string.match(str,"^(20)%d%d+$")~=nil or string.match(str,"^(19)%d%d+$")~=nil then
			lunar=QueryLunarInfo(str)
			if #lunar>0 then
				for i=1,#lunar do
					local cand = Candidate(input, seg.start, seg._end, lunar[i][1],lunar[i][2])
					cand.quality = 1000
					yield(cand)
				end
			end
		end
	end
end

-- 星期
function week_translator(input, seg)
	local keyword = rv_var["week_var"]	--更多格式添加于weeks之中
	if (input == keyword) then
		local weeks = {
			os.date("%Y年%m月%d日").." "..format_week(1)
			, os.date("%Y年%m月%d日").." "..format_week(0).." "..os.date("%H:%M:%S")
			}
		for i =1,#weeks do
			local cand = Candidate(keyword, seg.start, seg._end, weeks[i], "〔星期〕")
			cand.quality = 1000
			yield(cand)
		end
		weeks = nil
	end
end

-- 列出当年余下的节气
function Jq_translator(input, seg)
	local keyword ,jqs
	keyword = rv_var["jq_var"]
	if (input == keyword) then
		jqs = GetNowTimeJq(os.date("%Y%m%d"))
		for i =1,#jqs do
			local cand = Candidate(keyword, seg.start, seg._end, jqs[i], "〔节气〕")
			cand.quality = 1000
			yield(cand)
		end
		jqs = nil
	end
end



--- time/date/week/nl
function time_date(input, seg)
	date_translator(input, seg)
	time_translator(input, seg)
	week_translator(input, seg)
	lunar_translator(input, seg)
	Jq_translator(input, seg)
	QueryLunar_translator(input, seg)
end
return time_date