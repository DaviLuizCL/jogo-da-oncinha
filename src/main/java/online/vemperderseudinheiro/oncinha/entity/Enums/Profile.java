package online.vemperderseudinheiro.oncinha.entity.Enums;

public enum Profile {
	USER(0, "ROLE_USER"), STREAMER(1, "ROLE_STREAMER");
	
	private Integer codigo;
	private String descricao;
	
	private Profile(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}
	
	public static Profile toEnum(Integer cod) {
		if(cod == null) {
			return null;
		}
		
		for(Profile x : Profile.values() ) {
			if(cod.equals(x.getCodigo())){
				return x;
			}
		}
		
		throw new IllegalArgumentException("Perfil inválido");
	}
}
