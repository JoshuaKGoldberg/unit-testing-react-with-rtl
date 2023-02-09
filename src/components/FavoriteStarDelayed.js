import cx from "classnames";
import { useEffect, useState } from "react";

import styles from "./FavoriteStar.module.css";

export function FavoriteStarDelayed({ className, favorite }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <span
      aria-label={favorite ? "Favorite" : "Not a favorite"}
      aria-live="polite"
      className={cx(className, styles.star, !favorite && styles.notFavorite)}
      role="img"
    >
      ⭐
    </span>
  );
}
