// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 INTROO website loaded successfully!', 'color:#22d3ee; font-size:13px; font-weight:600;')

    // Mobile hamburger menu
    const hamburger = document.getElementById('hamburger')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileLinks = document.querySelectorAll('.mobile-link')

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        
        // Animate hamburger to X
        if (hamburger.classList.contains('active')) {
            hamburger.style.gap = '0'
            hamburger.querySelectorAll('.bar')[0].style.transform = 'rotate(45deg) translate(6px, 6px)'
            hamburger.querySelectorAll('.bar')[1].style.opacity = '0'
            hamburger.querySelectorAll('.bar')[2].style.transform = 'rotate(-45deg) translate(5px, -5px)'
        } else {
            hamburger.style.gap = '5px'
            hamburger.querySelectorAll('.bar')[0].style.transform = 'none'
            hamburger.querySelectorAll('.bar')[1].style.opacity = '1'
            hamburger.querySelectorAll('.bar')[2].style.transform = 'none'
        }
        
        mobileMenu.classList.toggle('active')
    })

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active')
            hamburger.classList.remove('active')
            hamburger.style.gap = '5px'
            hamburger.querySelectorAll('.bar')[0].style.transform = 'none'
            hamburger.querySelectorAll('.bar')[1].style.opacity = '1'
            hamburger.querySelectorAll('.bar')[2].style.transform = 'none'
        })
    })

    // Navbar scroll effect (shrink on scroll)
    const navbar = document.getElementById('navbar')
    let lastScroll = 0

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY
        
        if (currentScroll > lastScroll && currentScroll > 80) {
            navbar.style.transform = 'translateY(-100%)'
        } else {
            navbar.style.transform = 'translateY(0)'
        }
        
        lastScroll = currentScroll
    })

    // Scroll animations with Intersection Observer
    const animateElements = document.querySelectorAll('.service-card, .why-card, .timeline-step, .portfolio-item, .testimonial-card, .pricing-card')
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0)'
                }, index * 80)
            }
        })
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    })

    animateElements.forEach(el => {
        el.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        el.style.opacity = '0'
        el.style.transform = 'translateY(40px)'
        observer.observe(el)
    })

    // Console signature for premium feel
    console.log('%cBuilt as a fully responsive, glassmorphic, neon-accented single-page website for INTROO 🚀\nVanilla HTML + CSS + JS only • Mobile-first • Lightning fast', 'color:#c026d3; font-size:11px')
})