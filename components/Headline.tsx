import styles from "../styles/Home.module.css";

export function Headline(props:any) {
  return (
    <div className="Headline">
      <h1 className={styles.title}>{props.page} page</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        {props.children}
      </p>

      <button onClick={props.onClick}>ボタン</button>
    </div>
  );
}