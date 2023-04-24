import styled from 'styled-components'


export const Container = styled.header`
grid-area:header;

height: 116px;
width: 100%;

border-bottom-width: 1px;
border-bottom-style : solid ;
border-bottom-color : ${({ theme }) => theme.COLORS.GRAY_300};

display: flex;
justify-content: space-between;
align-items: center;

padding: 0 123px;
gap: 64px;

> h1{
    color : ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    align-items: center;
    font-size: 26px;
}



`;

export const Profile = styled.div`
width: 340px;
display: flex;
align-items: center;


> img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};

}

 > div{
     display: flex;
    flex-direction: column;
     margin-right:16px;
     line-height: 24px;

     button{
        background:none;
        border: none;
        font-size: 14px;
        color : ${({ theme }) => theme.COLORS.GRAY_100};
        display: flex;
        justify-content: end;
        
     }

    strong{
        font-size: 18px;
        color : ${({ theme }) => theme.COLORS.WHITE};
        cursor: pointer;
     }
 }


`;

