import { TwiterFollowCard } from "./TwitterFollowCard";
import "./assets/css/App.css";

const users = [
  {
    userName: "JavierRivas",
    name: "Javier Rivas Arreaga",
  },
  {
    userName: "elonmusk",
    name: "Elon Musk",
  },
];

export function App() {
  const format = (userName) => `@${userName}`;

  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name } = user;
        return (
          <TwiterFollowCard
            key={userName}
            userName={userName}
            formatUserName={format}
          >
            {name}
          </TwiterFollowCard>
        );
      })}
    </section>
  );
}
