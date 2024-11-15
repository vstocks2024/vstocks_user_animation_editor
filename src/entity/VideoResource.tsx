/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createClient } from '@supabase/supabase-js'
import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import { StoreContext } from "../store";

type VideoResourceProps={
    key:string;
    url:string;
};

export const VideoResource=observer(()=>{
    const store = useContext(StoreContext);
    
const supabaseUrl = import.meta.env.SUPABASE_URL!;
const supabaseKey = import.meta.env.SUPABASE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function handleFetchData(){

let { data, error } = await supabase.from('video').select('id')
if(error){ console.log(error); return;}
console.log(data);
}

useEffect(()=>{
    handleFetchData();
})
    
    return (<></>);
});