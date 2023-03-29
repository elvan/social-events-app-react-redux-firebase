import { useSelector } from 'react-redux';

export default function Sandbox() {
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
    </>
  );
}
