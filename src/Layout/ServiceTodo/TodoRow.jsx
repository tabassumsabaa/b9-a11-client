

const TodoRow = ({booking, handleConfirm}) => {
    const {_id, title, img, date, Price, status} = booking;
    return (
        
          <tr>           
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar mask mask-squircle h-12 w-12">              
                   <img src={img} alt="" />              
                </div>           
               </div>
            </td>
            <td>{title}</td>
            <td>{Price}</td>
            <td>{date}</td>           
            
           <th>
            {
                status === 'confirm'?                
                <button className="btn btn-ghost btn-xs text-red-700 font-semibold">Completed</button> :                
                <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs text-green-700 font-bold">Pending</button>
            }             
           </th>    
          </tr>
        
    );
};

export default TodoRow;
