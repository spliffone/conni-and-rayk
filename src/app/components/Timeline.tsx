import styles from "./Timeline.module.scss";
import React from "react";

interface TimelineEntryProps {
  // The text to display
  title: string;
  // Additional description
  subtitle?: string;
  // Starttime
  time: string;
}

export type TimelineListProps = TimelineEntryProps[];

const Timeline = ({
  title,
  entries,
}: {
  title: string;
  entries: TimelineListProps;
}) => {
  return (
    <div className="relative flex w-full flex-col">
      <h2 className="text-center font-head text-4xl font-extrabold">{title}</h2>
      <div className="flex h-auto w-full flex-col content-start px-8 py-3.5">
        <div className="timeline flex h-full items-center justify-between">
          <ul role="list" className={styles.list}>
            {entries.map((item, index) => (
              <li
                key={index}
                className={`${styles.listItem} ${index % 2 === 0 ? styles.even : styles.odd} `}
              >
                <div className={styles.point}>
                  <div
                    className={`${styles.body} border border-gray-200 bg-white`}
                  >
                    <h4 className="mb-2 font-sans font-bold text-gray-700">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="mb-2 font-sans text-gray-700">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="font-sans text-gray-700">{item.time}</p>
                  </div>
                  <div></div>
                </div>
                <div className={styles.line}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
