import React from 'react'

const AddItem = () => {
  return (
    <div>
      <div class="row kg-row">
        <div class="col-4"><input type="text" placeholder="Enter Your Task" /></div>
        <div class="col-4"><input type="date"  /></div>
        <div class="col-2"><button type="button" class="btn btn-primary">Add</button></div>
      </div>
    </div>
  )
}

export default AddItem
