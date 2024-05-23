import { useEffect, useState } from "react";


export function useDetectScroll(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
    const [lastScrollTop, setLastScrollTop] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
        if (currentScrollTop > lastScrollTop) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
    
        setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        setIsScrolled(currentScrollTop > 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);
    
    return { isScrolled, scrollDirection };
}