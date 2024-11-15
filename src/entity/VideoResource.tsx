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
    
// const supabaseUrl = process.env.SUPABASE_URL!;
// const supabaseKey = process.env.SUPABASE_KEY!;
const supabaseUrl=`https://uqmdwdzmfmvegzpietkc.supabase.co`;
const supabaseKey=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxbWR3ZHptZm12ZWd6cGlldGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4OTY0NjUsImV4cCI6MjA0NTQ3MjQ2NX0.T67Zml6gd1kFpcOxLZ9FpMbNhafugpSmeLn40RurmvI`;
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