import styled from "styled-components";

const Account = styled.div`
  &{
    overflow: hidden;
    min-width: min-content;
    height: 100%;
    font-family: "Roboto", monospace;    

    display: flex;
    align-items: center;

    div.account-photo {
      width: 44px;
      height: 44px;
      border-radius: 50%;      
    }

    & article {
      max-width: 140px;
      word-wrap: break-word;
      overflow-wrap: break-word;      
      padding-left: 6px;
    }
  }
`

export default ({ client = {} }) => {
  if (client) {    
    return (
      <Account>
        <div className="account-photo" style={{
          background: `url('${import.meta.env.VITE_BASE_URL_API}/static/photo-perfil/${client.photo}')`,
          backgroundSize:'cover',
          backgroundPosition:'center'
        }}/>
        <article>
          <p>{client.username}</p>
        </article>
      </Account>
    );

  } else {
    return <div className="w-[42px] h-[42px] rounded-full bg-red-500" />;
  }
};
