import {useState, useEffect} from 'react'
import {MAX_STORIES, INCREMENT_STORIES} from '../constants/index'
import {debounce} from '../utils/debounce'
export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false)
    const [count, setcount] = useState(INCREMENT_STORIES)

const handleScroll = debounce(() => {
    const scrollDistToBottom = Math.floor(
        document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop)
        );
        if (
            scrollDistToBottom > 5 || loading
        ) return false;
        
        setLoading(true);

    }, 300);
    
useEffect(() => {
    if(!loading) return;
    if(count + INCREMENT_STORIES >= MAX_STORIES){
        setcount(MAX_STORIES)
    }
    else{
        setcount(count + INCREMENT_STORIES)
    }
    setLoading(false)
}, [loading])



useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, );
    return { count };
};