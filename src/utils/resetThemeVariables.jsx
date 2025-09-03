export default function resetThemeVariables() {
    document.documentElement.style.setProperty('--main-bg', 'rgb(0, 172, 146)');
    document.documentElement.style.setProperty('--main-text', 'rgba(255, 255, 255, 0.800)');
    document.documentElement.style.setProperty('--main-light', 'rgba(255, 255, 255, 0.955)');
    document.documentElement.style.setProperty('--main-dark', 'rgba(0, 121, 151, 1)');
}