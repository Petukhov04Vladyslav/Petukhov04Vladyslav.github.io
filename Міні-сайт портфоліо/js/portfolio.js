document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill_per');
    const sections = document.querySelectorAll('.hidden');
    const experienceSection = document.querySelector('.experience');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    if (entry.target === experienceSection) {
                        skillBars.forEach(bar => {
                            bar.classList.remove('fill');
                            setTimeout(() => bar.classList.add('fill'), 50);
                        });
                    }
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    sections.forEach(section => observer.observe(section));
    observer.observe(experienceSection);
});