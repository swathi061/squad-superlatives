import { useState } from "react";

const rawData = [
  { "Smartest of the group": "Hari Nishanth", "Most Dramatic": "Swathi", "Baby of the group": "Sanjay", "Funniest person": "Mahiraja", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Dinesh", "Acting like straight": "Mahiraja", "Most likely to become rich?": "Gowtham Kumar", "Most likely to get into trouble": "Swathi", "Red flag": "Hari Nishanth", "Green flag": "Dinesh", "most likely to die in zombie apocalypse": "Monika", "most likely to survive in zombie apocalypse": "Hema", "The therapist": "Monika", "Rude AF": "Hari Nishanth", "The chill guy/girl": "Keerthana", "Baddie of the group": "Hema" },
  { "Smartest of the group": "Mahiraja", "Most Dramatic": "Swathi", "Baby of the group": "Hema", "Funniest person": "Hari Nishanth", "Dirty minded": "Swathi", "Main character syndrome": "Swathi", "Acting like straight": "Hema", "Most likely to become rich?": "Monika", "Most likely to get into trouble": "Sanjay", "Red flag": "Hari Nishanth", "Green flag": "Gowtham Kumar", "most likely to die in zombie apocalypse": "Monika", "most likely to survive in zombie apocalypse": "Dinesh", "The therapist": "Dinesh", "Rude AF": "Mahiraja", "The chill guy/girl": "Hema", "Baddie of the group": "Gowtham Kumar" },
  { "Smartest of the group": "Hari Nishanth", "Most Dramatic": "Swathi", "Baby of the group": "Hema", "Funniest person": "Sanjay", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Dinesh", "Acting like straight": "Swathi", "Most likely to become rich?": "Mahiraja", "Most likely to get into trouble": "Keerthana", "Red flag": "Hari Nishanth", "Green flag": "Dinesh", "most likely to die in zombie apocalypse": "Gowtham Kumar", "most likely to survive in zombie apocalypse": "Monika", "The therapist": "Dinesh", "Rude AF": "Mahiraja", "The chill guy/girl": "Hema", "Baddie of the group": "Swathi" },
  { "Smartest of the group": "Hari Nishanth", "Most Dramatic": "Swathi", "Baby of the group": "Sanjay", "Funniest person": "Sanjay", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Dinesh", "Acting like straight": "Swathi", "Most likely to become rich?": "Monika", "Most likely to get into trouble": "Keerthana", "Red flag": "Swathi", "Green flag": "Keerthana", "most likely to die in zombie apocalypse": "Hema", "most likely to survive in zombie apocalypse": "Mahiraja", "The therapist": "Keerthana", "Rude AF": "Mahiraja", "The chill guy/girl": "Mahiraja", "Baddie of the group": "Hema" },
  { "Smartest of the group": "Dinesh", "Most Dramatic": "Monika", "Baby of the group": "Hema", "Funniest person": "Mahiraja", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Mahiraja", "Acting like straight": "Swathi", "Most likely to become rich?": "Hari Nishanth", "Most likely to get into trouble": "Swathi", "Red flag": "Swathi", "Green flag": "Dinesh", "most likely to die in zombie apocalypse": "Sanjay", "most likely to survive in zombie apocalypse": "Mahiraja", "The therapist": "Monika", "Rude AF": "Hari Nishanth", "The chill guy/girl": "Hema", "Baddie of the group": "Monika" },
  { "Smartest of the group": "Sanjay", "Most Dramatic": "Monika", "Baby of the group": "Sanjay", "Funniest person": "Monika", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Dinesh", "Acting like straight": "Swathi", "Most likely to become rich?": "Mahiraja", "Most likely to get into trouble": "Keerthana", "Red flag": "Swathi", "Green flag": "Hema", "most likely to die in zombie apocalypse": "Swathi", "most likely to survive in zombie apocalypse": "Gowtham Kumar", "The therapist": "Hari Nishanth", "Rude AF": "Gowtham Kumar", "The chill guy/girl": "Mahiraja", "Baddie of the group": "Hari Nishanth" },
  { "Smartest of the group": "Gowtham Kumar", "Most Dramatic": "Swathi", "Baby of the group": "Sanjay", "Funniest person": "Dinesh", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Swathi", "Acting like straight": "Hari Nishanth", "Most likely to become rich?": "Dinesh", "Most likely to get into trouble": "Monika", "Red flag": "Hema", "Green flag": "Monika", "most likely to die in zombie apocalypse": "Hema", "most likely to survive in zombie apocalypse": "Swathi", "The therapist": "Monika", "Rude AF": "Hari Nishanth", "The chill guy/girl": "Mahiraja", "Baddie of the group": "Keerthana" },
  { "Smartest of the group": "Gowtham Kumar", "Most Dramatic": "Swathi", "Baby of the group": "Sanjay", "Funniest person": "Dinesh", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Swathi", "Acting like straight": "Swathi", "Most likely to become rich?": "Gowtham Kumar", "Most likely to get into trouble": "Monika", "Red flag": "Hari Nishanth", "Green flag": "Keerthana", "most likely to die in zombie apocalypse": "Hari Nishanth", "most likely to survive in zombie apocalypse": "Monika", "The therapist": "Dinesh", "Rude AF": "Swathi", "The chill guy/girl": "Mahiraja", "Baddie of the group": "Gowtham Kumar" },
  { "Smartest of the group": "Mahiraja", "Most Dramatic": "Swathi", "Baby of the group": "Hema", "Funniest person": "Sanjay", "Dirty minded": "Gowtham Kumar", "Main character syndrome": "Swathi", "Acting like straight": "Swathi", "Most likely to become rich?": "Dinesh", "Most likely to get into trouble": "Swathi", "Red flag": "Swathi", "Green flag": "Gowtham Kumar", "most likely to die in zombie apocalypse": "Swathi", "most likely to survive in zombie apocalypse": "Hari Nishanth", "The therapist": "Dinesh", "Rude AF": "Swathi", "The chill guy/girl": "Keerthana", "Baddie of the group": "Hema" },
];

const friends = ["Hari Nishanth", "Mahiraja", "Swathi", "Sanjay", "Hema", "Gowtham Kumar", "Dinesh", "Monika", "Keerthana"];
const categories = Object.keys(rawData[0]);

const categoryEmojis = {
  "Smartest of the group": "🧠",
  "Most Dramatic": "🎭",
  "Baby of the group": "🍼",
  "Funniest person": "😂",
  "Dirty minded": "😏",
  "Main character syndrome": "⭐",
  "Acting like straight": "🙃",
  "Most likely to become rich?": "💰",
  "Most likely to get into trouble": "😈",
  "Red flag": "🚩",
  "Green flag": "🟢",
  "most likely to die in zombie apocalypse": "🧟",
  "most likely to survive in zombie apocalypse": "🪓",
  "The therapist": "🛋️",
  "Rude AF": "💀",
  "The chill guy/girl": "😎",
  "Baddie of the group": "🔥",
};

const friendColors = {
  "Hari Nishanth": { bg: "#FFE8E8", accent: "#FF6B6B", text: "#C0392B" },
  "Mahiraja": { bg: "#E8F4FF", accent: "#4ECDC4", text: "#1A6B65" },
  "Swathi": { bg: "#FFF3E8", accent: "#FF9F43", text: "#C47A1E" },
  "Sanjay": { bg: "#F0E8FF", accent: "#A29BFE", text: "#5F4FCB" },
  "Hema": { bg: "#E8FFF3", accent: "#55EFC4", text: "#1A7A56" },
  "Gowtham Kumar": { bg: "#FFF8E8", accent: "#FDCB6E", text: "#9E7A0A" },
  "Dinesh": { bg: "#FFE8F5", accent: "#FD79A8", text: "#B5327A" },
  "Monika": { bg: "#E8EEFF", accent: "#74B9FF", text: "#2563EB" },
  "Keerthana": { bg: "#F5FFE8", accent: "#6FCF97", text: "#276749" },
};

function getVoteCounts(category) {
  const counts = {};
  friends.forEach(f => counts[f] = 0);
  rawData.forEach(row => {
    const winner = row[category];
    if (counts[winner] !== undefined) counts[winner]++;
  });
  return counts;
}

function getWinner(category) {
  const counts = getVoteCounts(category);
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
}

// Returns grouped podium: [{rank, entries:[[name,votes]], isTie}] up to 3 ranks
function getPodium(category) {
  const counts = getVoteCounts(category);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).filter(([, v]) => v > 0);
  const podium = [];
  let rank = 1;
  let i = 0;
  while (i < sorted.length && podium.length < 3) {
    const curVotes = sorted[i][1];
    const group = [];
    while (i < sorted.length && sorted[i][1] === curVotes) { group.push(sorted[i]); i++; }
    podium.push({ rank, entries: group, isTie: group.length > 1 });
    rank += group.length;
  }
  return podium;
}

function getFriendTitles(friend) {
  return categories.filter(cat => {
    const podium = getPodium(cat);
    return podium.length > 0 && podium[0].entries.some(([n]) => n === friend);
  });
}

function getTotalVotes(friend) {
  let total = 0;
  categories.forEach(cat => {
    const counts = getVoteCounts(cat);
    total += counts[friend] || 0;
  });
  return total;
}

// ---- Mini bar chart ----
function MiniBar({ category, friend }) {
  const counts = getVoteCounts(category);
  const max = Math.max(...Object.values(counts));
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {sorted.map(([name, count]) => (
        <div key={name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10, width: 80, fontFamily: "'Nunito', sans-serif", color: "#555", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name.split(" ")[0]}</span>
          <div style={{ flex: 1, background: "#eee", borderRadius: 99, height: 8, overflow: "hidden" }}>
            <div style={{
              width: `${(count / max) * 100}%`,
              height: "100%",
              background: name === friend ? friendColors[friend]?.accent || "#FF6B6B" : "#ccc",
              borderRadius: 99,
              transition: "width 0.8s ease"
            }} />
          </div>
          <span style={{ fontSize: 10, color: "#888", width: 12 }}>{count}</span>
        </div>
      ))}
    </div>
  );
}

const rankMedals = ["🥇", "🥈", "🥉"];
const rankColors = [{ name: "#333", vote: "#888" }, { name: "#666", vote: "#aaa" }, { name: "#888", vote: "#bbb" }];

// ---- Category Card ----
function CategoryCard({ category, onClick }) {
  const podium = getPodium(category);
  if (!podium.length) return null;

  const firstEntry = podium[0].entries[0];
  const isFirstTie = podium[0].isTie;
  const color = friendColors[firstEntry[0]] || { bg: "#f9f9f9", accent: "#ccc", text: "#333" };
  const total = rawData.length;
  const pct = Math.round((firstEntry[1] / total) * 100);

  return (
    <div
      onClick={() => onClick(category)}
      style={{
        background: color.bg,
        borderRadius: 20,
        padding: "18px 20px",
        cursor: "pointer",
        border: `2px solid ${isFirstTie ? "#F39C1288" : color.accent + "33"}`,
        transition: "transform 0.18s, box-shadow 0.18s",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${color.accent}44`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
    >
      <div style={{ fontSize: 28, marginBottom: 4 }}>{categoryEmojis[category]}</div>
      <div style={{ fontSize: 11, fontWeight: 700, color: color.text, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'Nunito', sans-serif", marginBottom: 5 }}>{category}</div>

      {podium.map(({ rank, entries, isTie }, pi) => {
        const medal = rankMedals[pi] || "";
        const rc = rankColors[pi] || rankColors[2];
        return (
          <div key={rank} style={{ marginBottom: pi < podium.length - 1 ? 4 : 0 }}>
            {isTie && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "#F39C1222", border: "1px solid #F39C1255", borderRadius: 99, padding: "1px 7px", marginBottom: 3 }}>
                <span style={{ fontSize: 9 }}>🤝</span>
                <span style={{ fontSize: 9, fontWeight: 800, color: "#C0820A", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase", letterSpacing: 0.5 }}>Tie</span>
              </div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2px 6px", alignItems: "center" }}>
              <span style={{ fontSize: pi === 0 ? 14 : 11 }}>{medal}</span>
              {entries.map(([name, votes], ei) => (
                <span key={name} style={{ display: "inline-flex", alignItems: "baseline", gap: 3 }}>
                  <span style={{
                    fontSize: pi === 0 ? 18 : 12,
                    fontWeight: pi === 0 ? 900 : 700,
                    color: pi === 0 ? color.text : rc.name,
                    fontFamily: pi === 0 ? "'Pacifico', cursive" : "'Nunito', sans-serif",
                    lineHeight: 1.2,
                  }}>{name.split(" ")[0]}</span>
                  {ei < entries.length - 1 && <span style={{ fontSize: 10, color: "#bbb" }}>&</span>}
                </span>
              ))}
              <span style={{ fontSize: 10, color: pi === 0 ? color.text + "88" : rc.vote, fontFamily: "'Nunito', sans-serif" }}>
                {entries[0][1]}v{pi === 0 ? ` · ${pct}%` : ""}
              </span>
            </div>
          </div>
        );
      })}

      <div style={{
        position: "absolute", right: -18, bottom: -18,
        fontSize: 72, opacity: 0.06, lineHeight: 1
      }}>{categoryEmojis[category]}</div>
    </div>
  );
}

// ---- Friend Profile Card ----
function FriendCard({ friend, onClick, selected }) {
  const titles = getFriendTitles(friend);
  const totalVotes = getTotalVotes(friend);
  const color = friendColors[friend] || { bg: "#f9f9f9", accent: "#ccc", text: "#333" };
  const initials = friend.split(" ").map(w => w[0]).join("").slice(0, 2);

  return (
    <div
      onClick={() => onClick(friend)}
      style={{
        background: selected ? color.accent : color.bg,
        borderRadius: 20,
        padding: "20px 18px",
        cursor: "pointer",
        border: `2px solid ${selected ? color.accent : color.accent + "44"}`,
        transition: "all 0.2s",
        boxShadow: selected ? `0 8px 28px ${color.accent}55` : "0 2px 10px rgba(0,0,0,0.05)",
        textAlign: "center",
      }}
      onMouseEnter={e => { if (!selected) { e.currentTarget.style.transform = "scale(1.03)"; } }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
    >
      <div style={{
        width: 54, height: 54, borderRadius: "50%",
        background: selected ? "rgba(255,255,255,0.3)" : color.accent + "33",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 10px",
        fontSize: 20, fontWeight: 900,
        color: selected ? "#fff" : color.text,
        fontFamily: "'Pacifico', cursive",
        border: `3px solid ${selected ? "rgba(255,255,255,0.5)" : color.accent + "55"}`
      }}>
        {initials}
      </div>
      <div style={{ fontSize: 14, fontWeight: 800, color: selected ? "#fff" : color.text, fontFamily: "'Nunito', sans-serif" }}>{friend.split(" ")[0]}</div>
      <div style={{ fontSize: 11, color: selected ? "rgba(255,255,255,0.8)" : "#888", fontFamily: "'Nunito', sans-serif", marginTop: 2 }}>{titles.length} title{titles.length !== 1 ? "s" : ""} · {totalVotes} votes</div>
      {titles.length > 0 && (
        <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
          {titles.slice(0, 3).map(t => (
            <span key={t} style={{ fontSize: 14 }}>{categoryEmojis[t]}</span>
          ))}
          {titles.length > 3 && <span style={{ fontSize: 10, color: selected ? "rgba(255,255,255,0.7)" : "#aaa" }}>+{titles.length - 3}</span>}
        </div>
      )}
    </div>
  );
}

// ---- Modal ----
function Modal({ category, onClose }) {
  const counts = getVoteCounts(category);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = sorted[0][1];
  const topVotes = max;
  const podium = getPodium(category);
  const isFirstTie = podium[0]?.isTie;
  const firstEntry = podium[0]?.entries[0];
  const color = friendColors[firstEntry?.[0]] || { bg: "#f9f9f9", accent: "#FF6B6B", text: "#333" };

  // Build rank map: name -> rank label
  const rankMap = {};
  podium.forEach(({ rank, entries }) => {
    entries.forEach(([name]) => { rankMap[name] = rank; });
  });

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "center",
      backdropFilter: "blur(4px)", padding: 16,
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 28, padding: "32px 28px", maxWidth: 420, width: "100%",
        boxShadow: "0 24px 64px rgba(0,0,0,0.2)", position: "relative",
        border: `3px solid ${isFirstTie ? "#F39C1244" : color.accent + "33"}`,
        fontFamily: "'Nunito', sans-serif",
      }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#999" }}>✕</button>
        <div style={{ fontSize: 44, marginBottom: 8 }}>{categoryEmojis[category]}</div>
        <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#aaa", marginBottom: 4 }}>Category</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#222", marginBottom: isFirstTie ? 8 : 20, lineHeight: 1.2 }}>{category}</div>
        {isFirstTie && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#FFF3CD", border: "1px solid #F39C1244", borderRadius: 99, padding: "4px 12px", marginBottom: 16 }}>
            <span>🤝</span>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#C0820A" }}>It's a tie for 1st place!</span>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {sorted.map(([name, count]) => {
            const pct = Math.round((count / rawData.length) * 100);
            const c = friendColors[name] || { accent: "#ccc", text: "#333" };
            const rank = rankMap[name];
            const isWinner = count === topVotes;
            const medal = rank === 1 ? "👑" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : "";
            return (
              <div key={name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontWeight: isWinner ? 800 : 500, color: isWinner ? c.text : "#555", fontSize: 14, display: "flex", alignItems: "center", gap: 4 }}>
                    {medal && <span>{medal}</span>}{name}
                    {isWinner && isFirstTie && <span style={{ fontSize: 10, background: "#F39C1222", color: "#C0820A", borderRadius: 99, padding: "1px 6px", fontWeight: 700, marginLeft: 4 }}>TIE</span>}
                  </span>
                  <span style={{ fontSize: 13, color: "#888" }}>{count} vote{count !== 1 ? "s" : ""} · {pct}%</span>
                </div>
                <div style={{ background: "#f0f0f0", borderRadius: 99, height: 10, overflow: "hidden" }}>
                  <div style={{
                    width: `${(count / max) * 100}%`,
                    height: "100%",
                    background: isWinner ? c.accent : "#ddd",
                    borderRadius: 99,
                    transition: "width 1s ease",
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---- Friend Detail Panel ----
function FriendDetail({ friend }) {
  const titles = getFriendTitles(friend);
  const color = friendColors[friend] || { bg: "#f9f9f9", accent: "#ccc", text: "#333" };
  const totalVotes = getTotalVotes(friend);
  const totalPossible = categories.length * rawData.length;
  const mvpScore = Math.round((totalVotes / totalPossible) * 100);

  const allVotes = categories.map(cat => {
    const counts = getVoteCounts(cat);
    return { cat, votes: counts[friend] || 0 };
  }).sort((a, b) => b.votes - a.votes);

  return (
    <div style={{
      background: "#fff",
      borderRadius: 24,
      padding: "28px 24px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      border: `2px solid ${color.accent}33`,
      fontFamily: "'Nunito', sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: color.accent + "22",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, fontWeight: 900, color: color.text,
          fontFamily: "'Pacifico', cursive",
          border: `3px solid ${color.accent}`,
        }}>
          {friend.split(" ").map(w => w[0]).join("").slice(0, 2)}
        </div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 900, color: color.text, fontFamily: "'Pacifico', cursive" }}>{friend}</div>
          <div style={{ fontSize: 12, color: "#aaa" }}>{totalVotes} total votes · MVP score: {mvpScore}%</div>
        </div>
      </div>

      {titles.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: "#aaa", marginBottom: 10 }}>🏆 Won these titles</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {titles.map(t => (
              <span key={t} style={{
                background: color.accent + "22",
                color: color.text,
                borderRadius: 99,
                padding: "5px 12px",
                fontSize: 12,
                fontWeight: 700,
                border: `1px solid ${color.accent}44`,
              }}>{categoryEmojis[t]} {t}</span>
            ))}
          </div>
        </div>
      )}

      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, color: "#aaa", marginBottom: 10 }}>📊 Votes per category</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {allVotes.filter(v => v.votes > 0).map(({ cat, votes }) => (
            <div key={cat} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14 }}>{categoryEmojis[cat]}</span>
              <span style={{ fontSize: 11, color: "#555", width: 140, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{cat}</span>
              <div style={{ flex: 1, background: "#f0f0f0", borderRadius: 99, height: 8, overflow: "hidden" }}>
                <div style={{
                  width: `${(votes / rawData.length) * 100}%`,
                  height: "100%",
                  background: color.accent,
                  borderRadius: 99,
                }} />
              </div>
              <span style={{ fontSize: 11, color: "#888", width: 12 }}>{votes}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("awards");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const tabs = [
    { id: "awards", label: "🏆 Awards" },
    { id: "friends", label: "👥 Friends" },
    { id: "stats", label: "📊 Stats" },
  ];

  // stats: most voted overall
  const friendStats = friends.map(f => ({
    name: f,
    totalVotes: getTotalVotes(f),
    titles: getFriendTitles(f).length,
  })).sort((a, b) => b.totalVotes - a.totalVotes);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #FFF9F0 0%, #FFF0F5 50%, #F0F5FF 100%)",
      fontFamily: "'Nunito', sans-serif",
      paddingBottom: 48,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        textAlign: "center",
        padding: "48px 24px 32px",
        position: "relative",
      }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
        <h1 style={{
          fontFamily: "'Pacifico', cursive",
          fontSize: "clamp(28px, 6vw, 52px)",
          background: "linear-gradient(135deg, #FF6B6B, #FF9F43, #A29BFE)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: 0,
          lineHeight: 1.2,
        }}>Squad Superlatives</h1>
        <p style={{ color: "#aaa", fontSize: 14, marginTop: 8, fontWeight: 600 }}>
          {rawData.length} votes · {friends.length} friends · {categories.length} categories
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32, padding: "0 16px" }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: "10px 22px",
            borderRadius: 99,
            border: "none",
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 800,
            fontSize: 14,
            background: activeTab === tab.id
              ? "linear-gradient(135deg, #FF6B6B, #FF9F43)"
              : "#fff",
            color: activeTab === tab.id ? "#fff" : "#888",
            boxShadow: activeTab === tab.id
              ? "0 4px 16px rgba(255,107,107,0.4)"
              : "0 2px 8px rgba(0,0,0,0.06)",
            transition: "all 0.2s",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>

        {/* AWARDS TAB */}
        {activeTab === "awards" && (
          <div>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <p style={{ color: "#888", fontSize: 14, fontWeight: 600 }}>Click any card to see the full breakdown 👇</p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}>
              {categories.map(cat => (
                <CategoryCard key={cat} category={cat} onClick={setSelectedCategory} />
              ))}
            </div>
          </div>
        )}

        {/* FRIENDS TAB */}
        {activeTab === "friends" && (
          <div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gap: 12,
              marginBottom: 24,
            }}>
              {friends.map(f => (
                <FriendCard
                  key={f}
                  friend={f}
                  selected={selectedFriend === f}
                  onClick={f => setSelectedFriend(prev => prev === f ? null : f)}
                />
              ))}
            </div>
            {selectedFriend && <FriendDetail friend={selectedFriend} />}
            {!selectedFriend && (
              <div style={{ textAlign: "center", color: "#bbb", fontSize: 14, fontWeight: 600, marginTop: 16 }}>
                👆 Click a friend to see their full profile
              </div>
            )}
          </div>
        )}

        {/* STATS TAB */}
        {activeTab === "stats" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Leaderboard */}
            <div style={{ background: "#fff", borderRadius: 24, padding: "24px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 20, color: "#222" }}>🏅 Most Voted Overall</div>
              {friendStats.map((f, i) => {
                const color = friendColors[f.name] || { accent: "#ccc", text: "#333" };
                const max = friendStats[0].totalVotes;
                return (
                  <div key={f.name} style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, color: "#333", fontSize: 14 }}>
                        {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`} {f.name}
                      </span>
                      <span style={{ fontSize: 12, color: "#888" }}>{f.totalVotes} votes · {f.titles} title{f.titles !== 1 ? "s" : ""}</span>
                    </div>
                    <div style={{ background: "#f0f0f0", borderRadius: 99, height: 12, overflow: "hidden" }}>
                      <div style={{
                        width: `${(f.totalVotes / max) * 100}%`,
                        height: "100%",
                        background: `linear-gradient(90deg, ${color.accent}, ${color.accent}bb)`,
                        borderRadius: 99,
                        transition: "width 1s ease",
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Fun facts */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 14,
            }}>
              {[
                { label: "Most sweep wins 🏆", value: friendStats.sort((a, b) => b.titles - a.titles)[0].name + ` (${friendStats[0].titles} titles)`, emoji: "👑", color: "#FFE8E8", accent: "#FF6B6B" },
                { label: "Most mentioned overall", value: friendStats.sort((a, b) => b.totalVotes - a.totalVotes)[0].name, emoji: "🌟", color: "#FFF3E8", accent: "#FF9F43" },
                { label: "Total responses", value: `${rawData.length} votes cast`, emoji: "📝", color: "#E8F4FF", accent: "#74B9FF" },
                { label: "Hotly contested 🔥", value: (() => { let min = Infinity, cat = ""; categories.forEach(c => { const vals = Object.values(getVoteCounts(c)).filter(v => v > 0); const spread = Math.max(...vals) - Math.min(...vals.filter(v => v > 0)); if (spread < min) { min = spread; cat = c; } }); return cat; })(), emoji: "⚡", color: "#F0E8FF", accent: "#A29BFE" },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: stat.color,
                  borderRadius: 20,
                  padding: "20px 18px",
                  border: `2px solid ${stat.accent}33`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{stat.emoji}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: stat.accent, marginBottom: 4 }}>{stat.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "#333", fontFamily: "'Pacifico', cursive" }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Category breakdown mini */}
            <div style={{ background: "#fff", borderRadius: 24, padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 20, color: "#222" }}>📋 All Category Winners</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
                {categories.map(cat => {
                  const podium = getPodium(cat);
                  if (!podium.length) return null;
                  const firstColor = friendColors[podium[0].entries[0][0]] || { accent: "#ccc", text: "#333" };
                  return (
                    <div key={cat} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ fontSize: 20, marginTop: 2 }}>{categoryEmojis[cat]}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, color: "#aaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: 2 }}>{cat}</div>
                        {podium.map(({ rank, entries, isTie }, pi) => {
                          const medal = rankMedals[pi] || "";
                          const rc = rankColors[pi] || rankColors[2];
                          return (
                            <div key={rank} style={{ display: "flex", alignItems: "center", gap: 4, marginTop: pi > 0 ? 2 : 0 }}>
                              <span style={{ fontSize: pi === 0 ? 13 : 11 }}>{medal}</span>
                              {isTie && <span style={{ fontSize: 9, background: "#F39C1222", color: "#C0820A", borderRadius: 99, padding: "1px 5px", fontWeight: 800, fontFamily: "'Nunito', sans-serif" }}>TIE</span>}
                              <span style={{ fontSize: pi === 0 ? 14 : 12, fontWeight: pi === 0 ? 800 : 600, color: pi === 0 ? firstColor.text : rc.name, fontFamily: "'Nunito', sans-serif" }}>
                                {entries.map(([n]) => n).join(" & ")}
                              </span>
                              <span style={{ fontSize: pi === 0 ? 12 : 11, color: pi === 0 ? "#aaa" : rc.vote, fontFamily: "'Nunito', sans-serif" }}>· {entries[0][1]}v</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCategory && <Modal category={selectedCategory} onClose={() => setSelectedCategory(null)} />}
    </div>
  );
}
