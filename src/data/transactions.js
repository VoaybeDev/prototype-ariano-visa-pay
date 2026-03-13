export const transactions = [
  { id: 1, emoji: '🎬', name: 'Netflix',              date: '13 Mar - 14:32', amount: -7041,  category: 'Streaming', bg: 'rgba(239,68,68,.1)' },
  { id: 2, emoji: '💰', name: 'Recharge MVola',       date: '12 Mar - 09:15', amount: +50000, category: 'Credit',    bg: 'rgba(34,197,94,.1)' },
  { id: 3, emoji: '🛍️', name: 'AliExpress',           date: '12 Mar - 18:44', amount: -28146, category: 'Shopping',  bg: 'rgba(168,85,247,.1)' },
  { id: 4, emoji: '🎵', name: 'Spotify',              date: '11 Mar - 11:00', amount: -4691,  category: 'Musique',   bg: 'rgba(245,200,66,.1)' },
  { id: 5, emoji: '🎬', name: 'Disney+',              date: '10 Mar - 08:00', amount: -4691,  category: 'Streaming', bg: 'rgba(61,142,248,.1)' },
  { id: 6, emoji: '💰', name: 'Recharge Orange Money', date: '10 Mar - 08:30', amount: +100000,category: 'Credit',   bg: 'rgba(34,197,94,.1)' },
]

export const formatAmount = (amount) => {
  const abs = Math.abs(amount).toLocaleString('fr-FR')
  return amount > 0 ? `+${abs} Ar` : `-${abs} Ar`
}

export const categories = [
  { label: '🎬 Streaming', amount: 11732,  color: 'var(--blue)',   pct: 30 },
  { label: '🛍️ Shopping',  amount: 28146,  color: 'var(--purple)', pct: 72 },
  { label: '🎵 Musique',   amount: 4691,   color: 'var(--gold)',   pct: 12 },
]

export const barData = [30,55,40,70,45,60,35,80,50,65,42,90,48]
