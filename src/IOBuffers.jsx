import React from 'react'
import { useState } from 'react';  

export function IOBuffers ({inputbuff, outputbuff}) {
    return ( 
    <div>
        <h2>Messages</h2>
        <form> 
            <label>
            In :
            <textarea value={inputbuff} rows="10" cols="70" readOnly="{true}"/>  
            </label>
            <br /><label>
            Out: 
            <textarea value={outputbuff} rows="10" cols="70" readOnly="{true}"/>  
            </label>
        </form>
    </div>
    );
}