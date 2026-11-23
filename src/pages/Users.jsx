import React, { useEffect, useState } from 'react';
import AddUserForm from '../components/users/AddUserForm';
import UserList from '../components/users/UserList';
import EditUserFrom from '../components/users/EditUserFrom';

function Users() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');

  const getUsers = () => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const updateUser = (name, email) => {
    fetch(`http://localhost:3001/users/${editUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email })
    }).then((response) => {
      if (response.ok) {
        getUsers();
        setEditUser(null);
      }
    });
  };

  const deleteUser = async () => {
    if (!userToDelete || isDeleting) return;

    setIsDeleting(true);
    setDeleteError('');

    try {
      const response = await fetch(
        `http://localhost:3001/users/${userToDelete.id}`,
        { method: 'DELETE' }
      );

      if (!response.ok) {
        throw new Error('Failed to delete user.');
      }

      setUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== userToDelete.id)
      );

      if (editUser?.id === userToDelete.id) {
        setEditUser(null);
      }

      setUserToDelete(null);
    } catch {
      setDeleteError('Could not delete the user. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="container">
      {!editUser && <AddUserForm getUsers={getUsers} />}

      {editUser && (
        <EditUserFrom
          key={editUser.id}
          user={editUser}
          onUpdate={updateUser}
          onCancel={() => setEditUser(null)}
        />
      )}

      <UserList
        users={users}
        onEdit={(user) => setEditUser(user)}
        onDelete={(user) => {
          setDeleteError('');
          setUserToDelete(user);
        }}
      />

      {userToDelete && (
        <div className="modal-overlay">
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-description"
          >
            <h2 id="delete-modal-title">Delete user?</h2>

            <p id="delete-modal-description">
              Are you sure you want to delete {userToDelete.name}?
              {' '}This action cannot be undone.
            </p>

            {deleteError && <p role="alert">{deleteError}</p>}

            <div className="modal-actions">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setUserToDelete(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="delete-confirm"
                disabled={isDeleting}
                onClick={deleteUser}
              >
                {isDeleting ? 'Deleting...' : 'Yes, delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;