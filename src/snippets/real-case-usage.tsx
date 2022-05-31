import { useRef, useState } from "react";

const useForm = <V extends Record<string, any>>(
  initValues: V,
) => {
  // Only for re-render purposes.
  const [, setCounter] = useState(0);

  const values = useRef(initValues);

  const rerender = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const update = <K extends keyof V>(key: K, value: V[K]) => {
    values.current = { ...values.current, [key]: value }; // Immediate change
    rerender(); // Triggers rerender
  };

  const data = {
    values: values.current,
  };

  const handlers = {
    update,
  };

  return [data, handlers] as const;
};

const Component = () => {
    const [{ values }, { update }] = useForm({ username: '' })

    const handleChange = () => {
      update('username', 'Example value');

      // Already updated
      // No need to wait for state update
      console.log(values.username)
    }

    return (
      <input value={values.username} onChange={handleChange} />
    )
}   
