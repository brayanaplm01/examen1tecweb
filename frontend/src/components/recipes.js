import React from 'react';

const Recipes = () => {
    const recipes = [
        {
            name: 'Tarta de Chocolate',
            image: 'https://source.unsplash.com/300x200/?chocolate,cake',
            description: 'Una deliciosa tarta con capas de chocolate.',
        },
        {
            name: 'Cheesecake',
            image: 'https://source.unsplash.com/300x200/?cheesecake,dessert',
            description: 'Un cheesecake cremoso con base de galleta.',
        },
        {
            name: 'Brownies',
            image: 'https://source.unsplash.com/300x200/?brownies,dessert',
            description: 'Brownies con un intenso sabor a chocolate.',
        },
        {
            name: 'Helado Artesanal',
            image: 'https://source.unsplash.com/300x200/?icecream,dessert',
            description: 'Helados hechos con los mejores ingredientes.',
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Recetas y Postres</h1>
            <p style={styles.description}>
                Descubre nuestras deliciosas recetas y postres. Perfectos para cualquier ocasión.
                
            </p>
            <div style={styles.recipeGrid}>
                {recipes.map((recipe, index) => (
                    <div key={index} style={styles.recipeCard}>
                        <img src={recipe.image} alt={recipe.name} style={styles.image} />
                        <h2 style={styles.recipeTitle}>{recipe.name}</h2>
                        <p style={styles.recipeDescription}>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        fontFamily: "'Arial', sans-serif",
        backgroundColor: '#fff7e6',
        textAlign: 'center',
        color: '#5a4b41',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#d35400',
    },
    description: {
        fontSize: '1.2rem',
        marginBottom: '2rem',
    },
    recipeGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
    },
    recipeCard: {
        backgroundColor: '#ffffff',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        textAlign: 'center',
        transition: 'transform 0.3s',
    },
    image: {
        width: '100%',
        borderRadius: '10px 10px 0 0',
    },
    recipeTitle: {
        fontSize: '1.5rem',
        margin: '0.5rem 0',
        color: '#e74c3c',
    },
    recipeDescription: {
        fontSize: '1rem',
        color: '#7f8c8d',
    },
};

export default Recipes;
