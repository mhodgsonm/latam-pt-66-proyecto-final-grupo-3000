import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Habitos = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem("token");
	const email = sessionStorage.getItem("email");
	const backendUrl = import.meta.env.VITE_BACKEND_URL;

	const [habitos, setHabitos] = useState([]);
	const [nombre, setNombre] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!token) navigate("/login");
		else cargarHabitos();
	}, []);

	const cargarHabitos = async () => {
		const resp = await fetch(`${backendUrl}/api/habitos`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		if (resp.ok) {
			const data = await resp.json();
			setHabitos(data);
		}
	};

	const crearHabito = async (e) => {
		e.preventDefault();
		const resp = await fetch(`${backendUrl}/api/habitos`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ nombre, descripcion })
		});
		if (resp.ok) {
			setNombre("");
			setDescripcion("");
			cargarHabitos();
		} else {
			const data = await resp.json();
			setError(data.msg || "Error al crear el hábito");
		}
	};

	return (
		<div className="container mt-5">
			<h2><i className="fa-solid fa-list-check me-2 text-primary"></i>Mis Hábitos</h2>
			<p className="text-muted">Bienvenido, {email}</p>

			<form onSubmit={crearHabito} className="card p-4 shadow-sm mb-4">
				<h5 className="mb-3">Nuevo Hábito</h5>
				{error && <div className="alert alert-danger">{error}</div>}
				<div className="mb-2">
					<input
						type="text"
						className="form-control"
						placeholder="Nombre del hábito"
						value={nombre}
						onChange={e => setNombre(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Descripción (opcional)"
						value={descripcion}
						onChange={e => setDescripcion(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary w-100">
					<i className="fa-solid fa-plus me-2"></i>Agregar Hábito
				</button>
			</form>

			<div className="list-group">
				{habitos.length === 0 && (
					<p className="text-muted text-center">No tienes hábitos registrados aún.</p>
				)}
				{habitos.map((h) => (
					<div key={h.id} className="list-group-item">
						<h5 className="mb-1">{h.nombre}</h5>
						{h.descripcion && <p className="mb-0 text-muted">{h.descripcion}</p>}
					</div>
				))}
			</div>
		</div>
	);
};
