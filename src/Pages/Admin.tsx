import React, { useState } from "react";
import MyBody from "../Components/MyBody";

interface TableData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const initialData: TableData[] = [
  { id: 1, name: "John", age: 25, email: "john@example.com" },
  { id: 2, name: "Mary", age: 32, email: "mary@example.com" },
  { id: 3, name: "Peter", age: 43, email: "peter@example.com" },
];

const Table = () => {
  const [data, setData] = useState<TableData[]>(initialData);
  const [editing, setEditing] = useState<boolean>(false);
  const [newData, setNewData] = useState<TableData>({
    id: 0,
    name: "",
    age: 0,
    email: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setNewData({ ...newData, [field]: e.target.value });
  };
  const handleEdit = (index: number) => {
    setEditing(true);
    setNewData(data[index]);
  };
  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };
  const handleSave = () => {
    if (editing) {
      setData(data.map((item) => (item.id === newData.id ? newData : item)));
    } else {
      setData([...data, { ...newData, id: data[data.length - 1].id + 1 }]);
    }
    setNewData({ id: 0, name: "", age: 0, email: "" });
    setEditing(false);
  };
  return (
    <MyBody>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editing && newData.id === item.id ? (
                  <input
                    type="text"
                    value={newData.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editing && newData.id === item.id ? (
                  <input
                    type="number"
                    value={newData.age}
                    onChange={(e) => handleInputChange(e, "age")}
                  />
                ) : (
                  item.age
                )}
              </td>
              <td>
                {editing && newData.id === item.id ? (
                  <input
                    type="email"
                    value={newData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editing && newData.id === item.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          {editing ? (
            <p>Editing row {newData.id}</p>
          ) : (
            <button onClick={() => setEditing(true)}>Add Row</button>
          )}
          {/* new row input fields */}
          {editing && (
            <div>
              <input
                type="text"
                placeholder="Name"
                value={newData.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
              <input
                type="number"
                placeholder="Age"
                value={newData.age}
                onChange={(e) => handleInputChange(e, "age")}
              />
              <input
                type="email"
                placeholder="Email"
                value={newData.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </MyBody>
  );
};

export default Table;
