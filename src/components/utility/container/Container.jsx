function NavbarContainer({ children }) {
  return (
    <div className='flex w-full xl:px-[64px] lg:px-[16px] px-[12px] items-center justify-center sticky top-0 z-40'>
      <div className='w-full max-w-[1920px] mx-auto'>
        {children}
      </div>
    </div>
  )
}

function PageContainer({ children }) {
  return (
    <div className='w-full max-w-[1440px] mx-auto xl:px-[88px] lg:px-[24px] px-[12px]'>
      <div className="
        flex flex-col
        xl:gap-[88px]
        gap-16
      ">
        {children}
      </div>
    </div>
  )
}

export { NavbarContainer, PageContainer };