import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './style.css';
import './case.css';

// Play case-study videos only while visible (saves battery and bandwidth), never for reduced motion.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target as HTMLVideoElement;
  if (e.isIntersecting && !reduced) v.play().catch(() => {}); else v.pause();
}), { threshold: 0.35 });
document.querySelectorAll('video').forEach((v) => io.observe(v));
