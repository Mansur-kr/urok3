    import React from 'react'

    const Header = () => {
        
        const container = document.querySelector('#date-container');

        const userName = prompt ('Введите имя пользователя')
        const now = new Date()
    const number = Math.round(Math.random() * 100)
    
    
    return (
        <div>
            <div id="date-container" className='w-[766px] h-[557px] border border-none rounded-[20px] m-auto mt-[50px] shadow-2xl p-[29px]'>
                
                <h1 className='text-[30px] mt-[50px] font-iltm'>Hello my name is: <span className='text-yellow-500'>{userName}</span></h1>
                
                <h3 className='text-[30px]'>This is the day: <span className='text-yellow-500'>{now.toDateString()}</span></h3>
                <h2 className='text-[30px]'>Random number:</h2>
            <strong className='text-[150px] ml-[280px]'>{number}</strong>
            

            {number % 2 === 0 }

            </div>
            
        </div>
    )
    }

    export default Header