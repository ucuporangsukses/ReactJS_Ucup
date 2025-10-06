export default function UsserProfile() {
    conts [nama. setName]= useState("");
    const [age, setAge]= iseState(0);
    const [isEditing, setIsEditing]= useState(false)
    return (
        <>
        <main>
            <h1>UserProfile</h1>

            {isEditing ?(
                <div>
                    <input type="text"
                        value={nama}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                    <input type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.ariaValueText))} />
                    <button onClick={() => setIsEditing(true)}>Simpan</button>
                </div>
                
            ): (
            <div>
                <p>Nama: {nama}</p>
                <p>Usia: {age}</p>
                <button onClick={()=> setIsEditing(true)}>Edit Profile</button>
            </div>)}
        </main>
        </>
    )
}