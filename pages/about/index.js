'use client';
import Layout from "@/components/layout";
export default function About({}) {
  return (
    <Layout>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <section className="col-lg connectedSortable">
                <div class="card card-primary card-outline">
                  <div class="card-body box-profile">
                    <p>このサイトは妻に頼まれて作成した小規模な顧客管理アプリの雛形です。</p>
                    <p>最終的にVue.jsを使って作成することになりましたが、このサイトでは<a href="https://nextjs.org/docs">Next.js</a>を使用しています。</p>
                    <p>顧客情報はクラウドではなくWEBストレージのlocalStorageに保存するようになっています。これはネットワークがない環境でも使いたいという要望のためです。</p>
                    <p>サイトデザインは<a href="https://adminlte.io/">AdminLTE</a>というBootstrap4を用いて作成されたテンプレートを元に作成しました。</p>
                    <p>作成途中の状態なので動かない機能なども存在しますがご了承ください。</p>
                    <p>制作期間: 2023年5月29日〜2023年5月30日</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="row">
              <section className="col">
                <div class="card card-primary card-outline">
                  <div class="card-body box-profile">
                    <div class="text-center">
                      <img class="profile-user-img img-fluid img-circle" src="https://cdn-ak.f.st-hatena.com/images/fotolife/d/duo-taro100/20230530/20230530141718.jpg" alt="User profile picture" />
                    </div>
                    <h3 class="profile-username text-center">山内 太郎</h3>
                    <p class="text-muted text-center">Fullstack Engineer / PM</p>
                  </div>
                </div>
              </section>
            </div>
            <div className="row">
              <section className="col-lg card">
                <div className="card-header">
                  <h3 className="card-title">リンク</h3>
                </div>
                <div class="card-body">
                  <dl class="row">
                  <dt class="col-sm-4">ブログ</dt>
                  <dd class="col-sm-8"><a href="https://duotaro.github.io/" target="_blank">Techvenience</a> - Next.jsとNotionを使って作成したブログです。</dd>
                  <dt class="col-sm-4">旧ブログ</dt>
                  <dd class="col-sm-8"><a href="https://it-innovation.hatenablog.com/" target="_blank">Techvenience</a> - 以前使用していたはてなブログです。</dd>
                  <dt class="col-sm-4">Github</dt>
                  <dd class="col-sm-8"><a href="https://github.com/duotaro/">duotaro</a> - 私のGithubアカウントです。</dd>
                  </dl>
</div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
