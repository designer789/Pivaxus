document.addEventListener('DOMContentLoaded', () => {
    // FAQ部分的水平滚动
    function initFaqScroll() {
        const section = document.querySelector('.features-scroll-section');
        const track = section.querySelector('.features-track');
        const cards = Array.from(track.children);

        function calculateScrollDistance() {
            const cardWidth = 600;
            const gap = 32;
            return (cards.length - 1) * (cardWidth + gap);
        }

        function onScroll() {
            // 只在大屏幕上启用滚动效果
            if (window.innerWidth > 1024) {
                const sectionRect = section.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                
                if (sectionRect.top <= 0) {
                    const scrolled = Math.abs(sectionRect.top);
                    const totalScrollDistance = sectionRect.height - viewHeight;
                    const progress = Math.min(1, Math.max(0, scrolled / totalScrollDistance));
                    
                    const translateX = progress * calculateScrollDistance();
                    track.style.transform = `translateX(calc(50vw - 600px - 5% - ${translateX}px))`;
                } else {
                    track.style.transform = `translateX(calc(50vw - 600px - 5%))`;
                }
            }
        }

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);
        onScroll();
    }

    initFaqScroll();
});