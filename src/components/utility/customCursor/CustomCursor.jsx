'use client'
import React, { useEffect, useState } from 'react'
import './style.css'

function CustomCursor() {
    const [isProjectHover, setIsProjectHover] = useState(false);
    useEffect(() => {
        const cursor = document.getElementById('cursor');
        const cursorBorder = document.getElementById('cursor-border');
        const cursorText = document.getElementById('cursor-text');
        let cursorX = 0, cursorY = 0, borderX = 0, borderY = 0;

        const move = (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            cursorText.style.left = `${cursorX}px`;
            cursorText.style.top = `${cursorY}px`;
        };

        const handleLinkHover = () => {
            cursorBorder.classList.add('hover');
        };

        const handleLinkLeave = () => {
            cursorBorder.classList.remove('hover');
        };

        const handleProjectHover = () => {
            setIsProjectHover(true);
            cursor.style.display = 'none';
            cursorText.style.display = 'block';
        };

        const handleProjectLeave = () => {
            setIsProjectHover(false);
            cursor.style.display = 'block';
            cursorText.style.display = 'none';
        };

        document.addEventListener('mousemove', move);
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });
        document.querySelectorAll('.project').forEach(project => {
            project.addEventListener('mouseenter', handleProjectHover);
            project.addEventListener('mouseleave', handleProjectLeave);
        });

        const borderAnimation = () => {
            const gapValue = 5;
            borderX += (cursorX - borderX) / gapValue;
            borderY += (cursorY - borderY) / gapValue;
            cursorBorder.style.left = `${borderX}px`;
            cursorBorder.style.top = `${borderY}px`;
            requestAnimationFrame(borderAnimation);
        };
        requestAnimationFrame(borderAnimation);

        return () => {
            document.removeEventListener('mousemove', move);
            document.querySelectorAll('a').forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
            document.querySelectorAll('.project').forEach(project => {
                project.removeEventListener('mouseenter', handleProjectHover);
                project.removeEventListener('mouseleave', handleProjectLeave);
            });
        };
    }, []);
    return (
        <>
            <div id='cursor' className=' xl:block hidden ' ></div>
            <div id="cursor-border" className=' xl:block hidden ' ></div>
            <div id='cursor-text' className={`xl:block hidden ${isProjectHover ? 'visible' : 'hidden'} `}>VIEW</div>
        </>
    )
}

export default CustomCursor;