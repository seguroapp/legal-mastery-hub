# Falhas de segurança ao migrar a página para WordPress

Este arquivo lista os principais riscos e recomendações de segurança para a página e seu ambiente WordPress.

## 1. Atualização de WordPress e plugins

- Mantenha o WordPress sempre atualizado.
- Atualize plugins e temas imediatamente após novas versões.
- Remova plugins e temas não utilizados para reduzir a superfície de ataque.

## 2. Plugins e temas não confiáveis

- Use apenas plugins e temas de fontes confiáveis.
- Evite plugins abandonados ou com poucas avaliações.
- Prefira plugins que recebem atualizações regulares.
- Antes de instalar, verifique compatibilidade e histórico de vulnerabilidades.

## 3. Usuários e permissões

- Crie contas com o menor nível de acesso necessário.
- Não use a conta `admin` como nome de usuário.
- Utilize senhas fortes e únicas.
- Limite o número de contas com permissão de publicação e administração.

## 4. Segurança de login

- Ative autenticação em dois fatores (2FA) para contas administrativas.
- Use bloqueio de IP ou limite de tentativas de login.
- Implemente HTTPS em todo o site, não apenas no formulário de login.

## 5. Backup e recuperação

- Configure backups automáticos regulares.
- Garanta que os backups sejam armazenados fora do servidor principal.
- Teste a restauração de backups periodicamente.

## 6. SSL e HTTPS

- Use certificado SSL válido e ative HTTPS no site inteiro.
- Redirecione todo o tráfego HTTP para HTTPS.
- Verifique se os recursos externos também usam URLs seguros.

## 7. Formulários e entradas de usuário

- Valide e sanitize todas as entradas de formulários.
- Use plugins que protegem contra spam e injeções (ex.: reCAPTCHA, Akismet).
- Evite armazenar dados sensíveis sem criptografia.

## 8. Conteúdo e ativo estáticos

- Não copie diretamente scripts ou configurações da aplicação React que não se aplicam ao WordPress.
- Se usar imagens, carregue-as no Media Library e garanta nomes e permalinks corretos.
- Evite expor caminhos sensíveis ou arquivos de configuração no servidor.

## 9. Configurações do servidor

- Use permissões de arquivo corretas: `644` para arquivos e `755` para pastas na maioria dos casos.
- Bloqueie acesso direto a arquivos sensíveis como `wp-config.php`.
- Configure um firewall de aplicação web (WAF) se possível.

## 10. SEO e metadados

- Não publique metadados ou comentários internos que contenham dados sensíveis.
- Revise metatags de Open Graph e descrição antes de publicar.

## 11. Monitoramento e detecção

- Instale plugins de segurança para monitorar malware e alterações inesperadas.
- Verifique logs de acesso e erros periodicamente.
- Configure alertas para mudanças de plugin, tema ou conteúdo crítico.

## 12. Segurança específica de migração

- Evite transferir credenciais, tokens ou dados do ambiente local para o WordPress.
- Não use arquivos de desenvolvimento ou debug na instalação de produção.
- Garanta que qualquer integração externa (e-mail, CRM, pixel de anúncios) esteja configurada com chaves seguras.

## 13. Resumo das recomendações

- Atualize sempre o WordPress, plugins e temas.
- Use HTTPS e 2FA.
- Limite permissões de usuários.
- Faça backups regulares.
- Escolha plugins e temas seguros.
- Monitore a instalação constantemente.

> Essas práticas ajudam a proteger a página do WordPress e a manter a integridade do conteúdo ao migrar do projeto atual para o ambiente final.
