const emojiScores = ["😦", "😞", "😐", "🙂", "😁"];

function HappinessPicker({ value, onChange }) {
  return (
    <div className="happynessPicker">
      {emojiScores.map((emoji, index) => (
        <label
          key={index}
          style={{ backgroundColor: index === value ? "#419d72" : null }}
        >
          <input
            type="radio"
            name="rating"
            value={value}
            onClick={() => onChange(index)}
            key={index}
          />
          <span>{emoji}</span>
        </label>
      ))}
    </div>
  );
}

export default HappinessPicker;
