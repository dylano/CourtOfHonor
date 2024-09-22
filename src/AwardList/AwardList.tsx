import styles from "./AwardList.module.css";

export function AwardList() {
  type AwardData = {
    name: string;
    badges: string[];
    other?: string[];
  };

  const awards: AwardData[] = [
    {
      name: "Sample Scout",
      badges: ["Canoeing", "Fingerprinting", "Wilderness Survival"],
      other: ["Firem'n Chit", "Totin' Chip"],
    },
  ];

  return (
    <div className={styles.cardList}>
      {awards.map((award) => (
        <div className={styles.card} key={award.name}>
          <h2>{award.name}</h2>
          <p>
            <h4 className={styles.category}>
              Merit badges
              {award.badges.length > 2 ? ` (${award.badges.length})` : ""}
            </h4>
            <div>{award.badges.join(", ")}</div>
          </p>
          {award.other && award.other.length > 0 && (
            <p>
              <h4 className={styles.category}>Additional awards</h4>
              <div>{award.other.join(", ")}</div>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
