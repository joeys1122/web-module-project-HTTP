import React from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const DeleteMovieModal = (props) => {
    const { setIsDeleting, deleteMovie, id } = props;
    const { push } = useHistory();

    const handleDelete = e => {
        e.preventDefault();

        axios.delete(`http://localhost:9000/api/movies/${id}`)
            .then(res => {
                deleteMovie(res.data);
                push('/movies');
            })
            .catch(err => console.log(err))
    }

    const handleCancel = () => {
        setIsDeleting(false);
    }

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleDelete}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete Movie</h4>
                        <button onClick={handleCancel} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input onClick={handleCancel} type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                        <input type="submit" className="btn btn-danger" value="Delete"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;