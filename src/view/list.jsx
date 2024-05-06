import { Card } from "./card";

export function List({botsList}) {
  return (
    <div className="cards-list">
      <ul>
        {botsList.map((item) => (
        <li className="card-item" key={item.id}>
          <Card {...item} />
        </li>
      ))}</ul>
    </div>
  );
}
