import { Index, onMount, createSignal, batch } from "solid-js";
import { createStore } from "solid-js/store";

const endAt = Date.now() + 10000;
const token = () => Math.random().toString(36).substring(2, 10);

const [count, setCount] = createSignal(0);
const [list, setList] = createStore([...Array(30000).keys()]);

function Solid(props) {
  onMount(() => {
    const go = () => {
      batch(() => {
        setList(5, token());
        setCount((c) => c + 1);
      });

      if (Date.now() < endAt) {
        setTimeout(go);
      }
    };

    go();
  });

  return (
    <>
      <h1>SolidJS ({count()})</h1>

      <div id="lots-o-numbers">
        <For each={list}>
          {(i) => {
            return <div>{i}</div>;
          }}
        </For>
      </div>
    </>
  );
}

export default Solid;
