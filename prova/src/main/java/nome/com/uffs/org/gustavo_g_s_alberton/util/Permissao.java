package nome.com.uffs.org.gustavo_g_s_alberton.util;

//Classe enumeradora, responsável por criar um tipo customizado/complexo
public enum Permissao { 	
    ADMINISTRADOR(1), CLIENTE(2), SERVIDOR(3);
	
	public int id;
	
	Permissao(int id){
		this.id = id;
	}
}
