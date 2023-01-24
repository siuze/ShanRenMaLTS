local function processor(key_event, env)
    if key_event:repr()=="Shift+space" or key_event:repr()=="Shift+Return" then
        if env.engine.context:has_menu() then
            local cand=env.engine.context:get_selected_candidate().text
            if cand and string.match(cand,'^%a+$') then
                env.engine:commit_text(cand:gsub("^%l",string.upper))
                env.engine.context:clear()
                return 1 -- 字符不上屏，结束 processors 流程
            end
        end
    elseif key_event:repr()=="Return" then
        if env.engine.context:has_menu() then
            if string.match(env.engine.context:get_selected_candidate().text,'^%a+$') then
                env.engine.context:commit()
                env.engine.context:clear()
                return 1 -- 字符不上屏，结束 processors 流程
            end
        end
    end
    return 2    --字符不上屏，交给下一个 processor
end
return processor