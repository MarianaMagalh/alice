import './Footer.css';

export default function Footer() {
    return(
        <>
        {/* Rodapé */}
        <footer className="footer">
            <div style={{ background: "#0b1546" }}></div>
            <div className="footer-text">
                Política de Privacidade | Termos de Serviço
                <br />© 2025 País das Palavras. Todos os direitos reservados.
            </div>
        </footer>
    </>
    )
    
}