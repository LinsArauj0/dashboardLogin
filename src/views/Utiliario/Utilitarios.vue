<template>
    <div id="main">
   
        <main>
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/setting-outlined.png"/></router-link></li>
                    <p>Configurações</p>
                </ul>
            </section>
            <section class="section-content">
                <ul>
                    <li><router-link to="/usuarios"><img src="../../icons/user.png"/></router-link></li>
                    <p>Usuários</p>
                </ul>
            </section> <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/arcticons_permissionsmanager.png"/></router-link></li>
                    <p>Permissões</p>
                </ul>
            </section> 
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/mdi_file-cancel-outline.png"/></router-link></li>
                    <p>Motivo de cancelamento</p>
                </ul>
            </section> 
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/icon-park-outline_upload-logs.png" class="imgLog"/></router-link></li>
                    <p>Logs</p>
                </ul>
            </section> 
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/Vector.png"/></router-link></li>
                    <p>Segmentos</p>
                </ul>
            </section>
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/tabler_versions.png"/></router-link></li>
                    <p>Versões</p>
                </ul>
            </section> 
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/mdi_calendar-outline.png"/></router-link></li>
                    <p>Feriados</p>
                </ul>
            </section>
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/carbon_report.png"/></router-link></li>
                    <p>Laudos</p>
                </ul>
            </section>
            <section class="section-content">
                <ul>
                    <li><router-link to="#"><img src="../../icons/mdi_message-fast-outline.png"/></router-link></li>
                    <p>Mensagens pré-definidas</p>
                </ul>
            </section>
        </main>     
    </div>
</template>

<script>
    export default {
        name: 'UtiliarioS', 
    }
</script>
<style>
@import './utilitarios.css';
</style>