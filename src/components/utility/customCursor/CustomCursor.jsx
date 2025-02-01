'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import './style.css';

function CustomCursor() {
    const [isProjectHover, setIsProjectHover] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsProjectHover(false);

        const cursor = document.getElementById('cursor');
        const cursorBorder = document.getElementById('cursor-border');
        const cursorText = document.getElementById('cursor-text');

        if (!cursor || !cursorBorder || !cursorText) return;

        let cursorX = 0, cursorY = 0, borderX = 0, borderY = 0;

        const move = (e) => {
            cursorX = e.clientX;
            cursorY = e.clientY;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            cursorText.style.left = `${cursorX}px`;
            cursorText.style.top = `${cursorY}px`;
        };

        const handleLinkHover = () => cursorBorder.classList.add('hover');
        const handleLinkLeave = () => cursorBorder.classList.remove('hover');

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

        const handleProjectClick = () => {
            setIsProjectHover(false);
            cursor.style.display = 'block';
            cursorText.style.display = 'none';
            
            cursorBorder.classList.remove('hover');
        };

        const attachHoverEvents = () => {
            document.querySelectorAll('.linkHover').forEach(link => {
                link.addEventListener('mouseenter', handleLinkHover);
                link.addEventListener('mouseleave', handleLinkLeave);
            });

            document.querySelectorAll('.project').forEach(project => {
                project.addEventListener('mouseenter', handleProjectHover);
                project.addEventListener('mouseleave', handleProjectLeave);
                project.addEventListener('click', handleProjectClick);
            });
        };

        document.body.addEventListener('mousemove', move);
        attachHoverEvents();

        const observer = new MutationObserver(() => {
            attachHoverEvents();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
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
            document.body.removeEventListener('mousemove', move);
            observer.disconnect();
            document.querySelectorAll('.linkHover').forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
            document.querySelectorAll('.project').forEach(project => {
                project.removeEventListener('mouseenter', handleProjectHover);
                project.removeEventListener('mouseleave', handleProjectLeave);
                project.removeEventListener('click', handleProjectClick);
            });
        };
    }, [pathname]);

    return (
        <>
            {window.innerWidth > 990 ?
                <>
                    <div id='cursor'></div>
                    <div id="cursor-border"></div>
                    <div id='cursor-text' className={`${isProjectHover ? 'visible' : 'hidden'}`}>VIEW</div>
                </>
            : "" }
        </>
    );
}

export default CustomCursor;