// Play case-study videos only while visible (saves battery and bandwidth), never for reduced motion.
import { reduced } from './common';

const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target as HTMLVideoElement;
  if (e.isIntersecting && !reduced) v.play().catch(() => {}); else v.pause();
}), { threshold: 0.35 });
document.querySelectorAll('video').forEach((v) => io.observe(v));
