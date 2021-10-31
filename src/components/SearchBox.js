import { FaSearch } from 'react-icons/fa';

function SearchBox() {
  return (
    <section className='relative py-16 bg-text-light'>
      <div className='relative w-10/12 h-auto mx-auto'>
        <input
          className='min-w-full px-8 py-4 rounded-full shadow-md outline-none'
          type='text'
          placeholder='Search News'
        />
        <button className='absolute right-8 top-3'>
          <FaSearch size='2rem' className='text-primary-light' />
        </button>
      </div>
    </section>
  );
}

export default SearchBox;