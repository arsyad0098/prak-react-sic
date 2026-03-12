export default function HelloWorld(){
        const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01",
        usia: 50
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
	            nama="Arsyad" 
	            nim="169412"
	            tanggal={new Date().toLocaleDateString()}
	          />
              <UserCard 
	            nama="Rusdi" 
	            nim="169412"
	            tanggal="12/5/2026"
	          />
              <UserCard{...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <div >
            <h1>Selamat Datang</h1>
            <p>Semoga harimu menyenangkan</p>
        </div>
    )
}   
function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}   
function UserCard(props){
    return (
        <div >
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Usia: {props.usia}</p>
        </div>
    )
}