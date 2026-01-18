function UnOrderedList({ title, description }) {
  return (
    <div>
      <ul
        className="
           font-normal list-disc
          xl:text-2xl xl:pl-8
          lg:text-xl lg:pl-8
          text-base pl-6
        "
      >
        <li>
          <span className="font-semibold">{title}</span>
          {description}
        </li>
      </ul>
    </div>
  );
}

export default UnOrderedList;
