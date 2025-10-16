export default function Button({ text, variant }) {
  const styles = {
    primary: "bg-primary text-white hover:bg-[#036540]",
    secondary: "bg-secondary text-white",
    alert: "bg-alert text-white",
  };

  return (
    <button
      className={`w-full py-2 rounded-lg font-semibold transition ${styles[variant]}`}
    >
      {text}
    </button>
  );
}
