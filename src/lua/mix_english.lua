
local function mix_english(input,env)
		if env.engine.context:get_option('mix_english') then  --如果开启了中英文混输
			for option_ in input:iter() do	 --检查所有候选项
				yield(option_)
			end
		else
			for option_ in input:iter() do	 --检查所有候选项
				if string.match(option_.text,'^%a+$')==nil then	--
					yield(option_)
				end
			end
		end
end
return mix_english