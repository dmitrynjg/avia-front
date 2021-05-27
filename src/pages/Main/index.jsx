const Main = function () {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <button
        class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center outline-none'
        onClick={() => {
          document.location.href = '../../google';
        }}
      >
        <img src='./google-icon.svg' alt='google logo' className='w-6 h-auto mr-3' />
        <span>Войти через Google</span>
      </button>
    </div>
  );
};

export default Main;
