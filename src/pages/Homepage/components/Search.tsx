import { BiSearchAlt } from 'react-icons/bi';
interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}
const Search = (props: SearchProps) => {
  return (
    <div className="flex items-center border border-2 p-2 w-fit rounded-lg my-2">
      <input
        role="search"
        autoComplete="off"
        onChange={props.onChange}
        type="text"
        className="focus:outline-none"
        placeholder={props.placeholder ?? 'Search'}
        defaultValue={props.value ?? ''}
      />
      <BiSearchAlt color="gray" />
    </div>
  );
};

export default Search;
