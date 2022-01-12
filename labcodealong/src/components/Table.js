import Employee from "./Employee"
function Table() {
    return(
        <div>
            <table>   
            <tr>
        <th>Name</th> 
        <th>Dept</th> 
        <th>Salary</th> 
        </tr>  
        <Employee name="Delta" dept="NY" salary="60,162"/>
        <Employee name="Omicron" dept="CA" salary="77,412"/>
        <Employee name="Deltacron" dept="World" salary="0"/>
      </table>

        </div>
    )
}
export default Table